const bug = document.getElementById('bug');
const barraLateral = document.querySelector('.barra-lateral');
const spans = document.querySelectorAll('span');
const interruptor = document.querySelector('.interruptor');
const circulo = document.querySelector('.circulo');


interruptor.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle('tema-oscuro');
    circulo.classList.toggle('prendido');
});

bug.addEventListener("click", () => {
    barraLateral.classList.toggle('mini-barra-lateral');
    spans.forEach((span) => {
        span.classList.toggle('oculto');
    });
});
