let currentPage = 1;
const pages = document.querySelectorAll('.page');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showPage(pageNumber) {
    pages.forEach((page, index) => {
        if (index === pageNumber - 1) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });

    // Deshabilitar botones en los límites
    prevButton.disabled = pageNumber === 1;
    nextButton.disabled = pageNumber === pages.length;
}

// Inicializar la primera página
showPage(currentPage);

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < pages.length) {
        currentPage++;
        showPage(currentPage);
    }
});
