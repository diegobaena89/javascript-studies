//const frutas = ['pera', 'maçã', 'uva', 'abacaxi'];

/*for (let i = 0; i < frutas.length; i++) {
    console.log([i], frutas[i]);
}*/

// for in - lê os índices ou chaves do objeto
/*for (let indice in frutas) {
    console.log(frutas[indice])
}*/

const pessoa = {
    nome: 'Diego',
    sobrenome: 'Baena',
    idade: 31
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}