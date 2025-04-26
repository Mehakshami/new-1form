// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNNs7Nz8WC0JL3r2cL3Qr_Mb0GitL028g",
  authDomain: "form-4d6b5.firebaseapp.com",
  projectId: "form-4d6b5",
  storageBucket: "form-4d6b5.appspot.com",
  messagingSenderId: "162108700626",
  appId: "1:162108700626:web:ee619eebe63491fbebfa0b",
  measurementId: "G-1CK3CP2K0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Get the form and submit button
const signupButton = document.getElementById('submit');

signupButton.addEventListener('click', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const fileInput = document.getElementById('profileImage');

  if (email === "" || password === "" || username === "") {
    alert("Please fill all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account created successfully!");

      // Show the card output
      document.getElementById('cardOutput').style.display = 'block';
      document.getElementById('outputText').innerText = `Welcome, ${username}!`;

      // Show profile image if uploaded
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          document.getElementById('previewImg').src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});
