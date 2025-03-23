// Import Firebase modules from the CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

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

// Get DOM elements for login page
const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in with Firebase Authentication
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful login: redirect to welcome page
      window.location.href = "main.html";
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
});
