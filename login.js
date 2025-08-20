// Typewriter animation for heading
window.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("font[color='darkblue']");
  const text = heading.textContent;
  heading.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      heading.textContent += text.charAt(i);
      i++;
      setTimeout(type, 75);
    }
  }

  type();

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  }
});

// Theme toggle button
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// Fade-in form
window.onload = () => {
  const form = document.querySelector("form");
  form.style.opacity = 0;
  form.style.transform = "translateY(30px)";
  form.style.transition = "opacity 1.5s ease, transform 1s ease";
  setTimeout(() => {
    form.style.opacity = 1;
    form.style.transform = "translateY(0)";
  }, 300);
};

// Input field highlight
document.querySelectorAll("input[type='text'], input[type='password']").forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.borderColor = "#1E90FF";
    input.style.boxShadow = "0 0 8px rgba(30, 144, 255, 0.4)";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#ccc";
    input.style.boxShadow = "none";
  });
});

// Dummy login validation
document.querySelector("form").addEventListener("submit", (e) => {
  const username = document.querySelector("input[name='username']").value.trim();
  const password = document.querySelector("input[name='password']").value.trim();

  if (username === "" || password === "") {
    e.preventDefault();
    shakeForm();
    alert("⚠️ Please fill in both Username and Password!");
  }
});

// Shake animation
function shakeForm() {
  const form = document.querySelector("form");
  form.style.animation = "shake 0.4s";
  form.addEventListener("animationend", () => {
    form.style.animation = "";
  });
}

// Password strength checker
const passwordField = document.querySelector("input[name='password']");
const strengthMsg = document.createElement("div");
strengthMsg.style.fontSize = "14px";
strengthMsg.style.marginTop = "5px";
strengthMsg.style.color = "#444";
passwordField.parentNode.appendChild(strengthMsg);

passwordField.addEventListener("input", () => {
  const val = passwordField.value;
  let strength = "";
  if (val.length > 8 && /[A-Z]/.test(val) && /\d/.test(val) && /[\W_]/.test(val)) {
    strength = "🟢 Strong Password";
    strengthMsg.style.color = "green";
  } else if (val.length >= 6) {
    strength = "🟡 Medium Strength";
    strengthMsg.style.color = "orange";
  } else {
    strength = "🔴 Weak Password";
    strengthMsg.style.color = "red";
  }
  strengthMsg.textContent = strength;
});
