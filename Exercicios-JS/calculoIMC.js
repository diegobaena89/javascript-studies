let nome = window.prompt('Digite o seu nome: ');
let altura = window.prompt('Digite sua altura em centímetros: ');
let alturaCentimetro = parseFloat(altura);
let peso = window.prompt('Digite seu peso: ');
let pesoFloat = parseFloat(peso);
let alturaMetros = altura / 100;

const imc = pesoFloat / (alturaMetros * alturaMetros);


if(imc < 16){
    classificacao = 'Baixo peso muito grave';
    } else if(imc >= 16 && imc <= 16.99){
    classificacao = 'Baixo peso grave';
    } else if(imc >= 17 && imc <= 18.49){
    classificacao = 'Baixo peso';
    } else if(imc >= 18.50 && imc <= 24.99){
    classificacao = 'Peso normal';
    } else if(imc >= 25 && imc <= 29.99){
    classificacao = 'Sobrepeso';
    } else if(imc >= 30 && imc <= 34.99){classificacao = 'Obesidade grau I';
    } else if(imc >= 35 && imc <= 39.99){
    classificacao = 'Obesidade grau II';
    } else { 
    classificacao = 'Obesidade grau III';
}


console.log(`${nome} possui índice de massa corporal igual a ${imc}, sendo classificado como ${classificacao}`)
