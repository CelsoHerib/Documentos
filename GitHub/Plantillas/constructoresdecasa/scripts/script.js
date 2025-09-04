const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
const searchContainer = document.querySelector('.search-container');
const searchBtn = document.querySelector('.search-button');

menuToggle.addEventListener('click', () => {
    const isMenuActive = menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    menuToggle.querySelector('button').classList.toggle('open');

    // Cerrar búsqueda si el menú se abre
    if (isMenuActive && searchContainer.classList.contains('active')) {
        searchContainer.classList.remove('active');
    }
});

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isSearchActive = searchContainer.classList.toggle('active');

    // Cerrar menú si la búsqueda se abre
    if (isSearchActive && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.querySelector('button').classList.remove('open');
    }
});

// Cerrar menú y búsqueda al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.querySelector('button').classList.remove('open');
        searchContainer.classList.remove('active');
    });
});

// Cerrar menú y búsqueda al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && !searchContainer.contains(e.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.querySelector('button').classList.remove('open');
        searchContainer.classList.remove('active');
    }
});