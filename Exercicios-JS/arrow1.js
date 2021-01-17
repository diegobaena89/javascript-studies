let dobro = function (a) {
    return 2*a;
}

dobro = (a) => {
    return 2 * a; 
}

dobro = a => 2 * a; //função de uma única linha - return implicito


console.log(dobro(Math.PI))

let ola = function() {
    return 'Ola'
}

ola = () => 'Olá!!!'
console.log(ola())

