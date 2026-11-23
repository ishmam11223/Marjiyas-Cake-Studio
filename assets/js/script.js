// Update this URL after creating your Google Order Form.
const ORDER_FORM_URL = "https://forms.google.com/";

// Set the order button destination.
const orderButton = document.getElementById("orderFormButton");
if (orderButton && ORDER_FORM_URL !== "https://forms.google.com/") {
  orderButton.href = ORDER_FORM_URL;
}

// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }));
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
