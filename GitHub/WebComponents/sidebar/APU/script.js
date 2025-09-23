const bug = document.getElementById('bug');
const barraLateral = document.querySelector('.barra-lateral');
const spans = document.querySelectorAll('span');


bug.addEventListener("click", () => {
    barraLateral.classList.toggle('mini-barra-lateral');
    spans.forEach((span) => {
        span.classList.toggle('oculto');
    });
});
