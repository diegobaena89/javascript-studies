// Declaração de função (Function Hoisting)
function falaOi() {
    console.log("oi");
}

// First Class Objects
// Function Expression
const souUmDado = function() {
    console.log('Sou um dado.');
};

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow Functions
const funcaoArrow = () => {
    console.log("Sou uma arrow function");
}

funcaoArrow();

// Dentro de um objeto
const obj ={
    falar: function () {
        console.log("estou falando");
    }
};

obj.falar();