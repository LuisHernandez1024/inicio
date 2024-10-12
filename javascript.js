// Funcionalidad de acordeón
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Verifica si el contenido está visible
        if (content.style.display === "block") {
            content.style.display = "none";
            // Cambia el signo de nuevo a "+"
            button.textContent = "+"; // Cambio: al cerrar el acordeón, cambia a "+"
        } else {
            content.style.display = "block";
            // Cambia el signo a "-"
            button.textContent = "-"; // Cambio: al abrir el acordeón, cambia a "-"
        }
    });
});
