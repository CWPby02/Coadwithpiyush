alert("JS connected");

alert("admin-login.js loaded");

import { loginUser } from "../../firebase/auth.js";

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  loginMessage.textContent = "Checking...";

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    await loginUser(email, password);

    loginMessage.textContent = "Login successful.";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);
  } catch (error) {
    loginMessage.textContent = error.code || error.message;
    console.log(error);
  }
});
