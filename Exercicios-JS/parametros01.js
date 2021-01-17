/*function funcao() {
    console.log(arguments[0])
}
funcao('valor');


function soma(a, b = 2) {
    console.log(a + b);
}
funcao(2)

// Argumento por desestruturação de objeto
function destruc({nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20}
destruc(obj);

// Argumento por desestruturação de array
function destruc2([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

destruc2(['Luis', 'Miranda', 30])*/

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50)