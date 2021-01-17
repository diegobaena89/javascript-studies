// Promisse.all     Promisse.race       Promisse.resolve        Promisse.reject
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false);
            return;
        }
        setTimeout(() => {
            resolve(msg);
            return;
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
];

/*Promise.all(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});

Promise.race(promises)
.then(function(valor) {
    console.log(valor);
})
.catch(function(erro) {
    console.log(erro);
});*/

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));