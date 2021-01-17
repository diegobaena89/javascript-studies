// indice        0  1  2  3  4  5  6  7  8
/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero);

const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(resto);*/

//para pegar o resto dos numeros
// ... rest, ...spread

/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);

const cliente = {
    nome: 'Diego',
    sobrenome: 'Baena Fronteira',
    idade: 31,
    profissão: 'estudante',
};

const {nome, sobrenome, idade} = cliente;
console.log(nome, sobrenome, idade)*/

// EXERCÍCIOS

// Extraia o background, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);

const {background, color, margin} = btnStyles;
console.log(background)
console.log(color)
console.log(margin)

// Troque od valores das variáveis abaixo

let cursoAtivo = 'Javascript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo)

// Corrija o erro abaixo

const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
console.log(bobCor)