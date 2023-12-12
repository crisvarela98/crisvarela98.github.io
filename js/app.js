// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener los datos del formulario
  var formData = new FormData(this);

  // Enviar los datos al servidor
  fetch('URL_DEL_SERVIDOR_O_SERVICIO', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Hacer algo con la respuesta del servidor (si es necesario)
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});