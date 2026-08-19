const themeBtn = document.getElementById("themeBtn");
const changeTextBtn = document.getElementById("changeTextBtn");
const scrollBtn = document.getElementById("scrollBtn");
const greeting = document.getElementById("greeting");
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const message = document.getElementById("message");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

changeTextBtn.addEventListener("click", () => {
  greeting.textContent = "Welcome to my bright portfolio!";
});

scrollBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();

  if (name) {
    message.textContent = `Hello ${name}, thanks for visiting my portfolio!`;
    nameInput.value = "";
  } else {
    message.textContent = "Please enter your name.";
  }
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.transform = `translate(${(x - rect.width / 2) / 18}px, ${(y - rect.height / 2) / 18}px) scale(1.06)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
});