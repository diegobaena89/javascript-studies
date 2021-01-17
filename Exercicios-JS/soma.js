let num1 = window.prompt('Digite um número: ');
let operation = window.prompt('Digite uma operação (soma ou subtração): ');
let num2 = window.prompt('Digite um número: ');

function operationCalc(num1, num2, operation){
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    let resultado = 0;

    if(operation == 'soma'){
        resultado = num1 + num2
    } if(operation == 'substração') {
        resultado = num1 - num2
    }
    return resultado;
}

console.log('O resultado é:' + operationCalc(num1,num2, operation));