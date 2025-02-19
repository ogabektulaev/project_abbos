// Import Firebase modules from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIShLaGint52snMfp6txUDLH3-qqbvJxA",
  authDomain: "test-abbos.firebaseapp.com",
  projectId: "test-abbos",
  storageBucket: "test-abbos.firebasestorage.app",
  messagingSenderId: "878512105415",
  appId: "1:878512105415:web:4e574b43087f2ab8349be2",
  measurementId: "G-QFN9JGXF9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get DOM elements for welcome page
const welcomeMessage = document.getElementById("welcome-message");
const logoutButton = document.getElementById("logout-button");

// Check authentication state and update UI accordingly
onAuthStateChanged(auth, (user) => {
  if (user) {
    welcomeMessage.textContent = `Welcome, ${user.email}!`;
  } else {
    // If no user is logged in, redirect to login page
    window.location.href = "index.html";
  }
});

// Handle logout
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Redirect to login page after successful logout
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
});
