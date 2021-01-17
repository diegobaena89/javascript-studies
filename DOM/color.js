let body = document.getElementsByClassName('body');

let btnGrey = document.getElementById('grey');
let btnYellow = document.getElementById('yellow');
let btnPurple = document.getElementById('purple');
let btnBlue = document.getElementById('blue');

btnGrey.addEventListener('click', () => {
    document.body.style.backgroundColor = 'grey';
});
btnYellow.addEventListener('click', () => {
    document.body.style.backgroundColor = 'yellow';
});
btnBlue.addEventListener('click', ()=> {
    document.body.style.backgroundColor = 'blue';
});
btnPurple.addEventListener('click', () => {
    document.body.style.backgroundColor = 'purple';
});
