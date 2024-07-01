// script.js
// Función para mostrar y ocultar el menú de navegación
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

// Agregamos un evento de click al botón de menú
document.querySelector('.menu-btn').addEventListener('click', toggleMenu);

// Función para mostrar y ocultar el formulario de contacto
function toggleContactForm() {
    const form = document.querySelector('#contacto form');
    form.classList.toggle('show');
}

// Agregamos un evento de click al botón de contacto
document.querySelector('#contacto button').addEventListener('click', toggleContactForm);