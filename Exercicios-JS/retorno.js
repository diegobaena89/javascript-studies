// Escreva uma função que recebe um numero e
// retorne o seguinte:
// Numero é divisível por 3 = Fizz
// Numero é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Numero não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o numero é realmente um número
// Use a função com números de 0 a 100

function fizzBuzz(numero) {
    if(typeof numero != 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    
    return numero
}

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}