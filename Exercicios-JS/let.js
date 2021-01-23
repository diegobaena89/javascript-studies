// o let preserva o escopo onde a variável foi criada

// 3 escopos: global, função e bloco

// o let faz com que a variavel preserve o escopo onde ela foi criada

if(true) {
    let serie = 'Friends'
    console.log(serie)
}

var serie = 'Ocean'

{
    var serie = 'The Walking Deade'
    console.log('dnetro do bloco: ' + serie)
}

console.log('fora do bloco: ' + serie)