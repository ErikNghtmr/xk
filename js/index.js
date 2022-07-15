//con este iniciamos la libreria AOS de animaciones
AOS.init();

let menu = document.getElementById('menu');
let menuBar = document.getElementById('menu-bar');

menuBar.addEventListener('click', function() {
    menu.classList.toggle('menu-toggle');
});