const checkbox = document.getElementById('checkbox');
const text = document.getElementById('text');

checkbox.addEventListener('change', () => {
    //muda o tema da página
    if (document.body.classList.toggle('dark')) {
    text.innerText = 'Clique acima para ativar o modo diurno';
    } else {
        text.innerText = 'Clique acima para ativar o modo noturno';
    }
});
