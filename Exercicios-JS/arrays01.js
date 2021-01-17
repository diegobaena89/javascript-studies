const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
//delete nomes[2]

console.log(nomes.length); // pegar o tamanho do array

const removido = nomes.pop(); // remove do fim
console.log(nomes, removido);

nomes.push('Jonatas'); // add no fim
console.log(nomes);
nomes.unshift('Wallace'); //add no começo
console.log(nomes);

const novo = nomes.slice(1,3)
console.log(novo);

const nome = 'Luiz Otávio Miranda';
const nomeSeparado = nome.split(' ');
console.log(nomeSeparado);

const nameSep = ['Diego', 'Baena', 'Fronteira'];
const nameJoint = nameSep.join(' ');
console.log(nameJoint);