const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(índice, delete, elem1, elem2, elem3)

//pop
const removidos = nomes.splice(3, 2, 'Luiz') //remove o Gabriel e a Júlia adiciona o Luiz

console.log(nomes, removidos)

// Concatenando Array

const a1 = [1, 2 ,3];
const a2 = [4, 5, 6];
//const a3 = a1.concat(a2);

// Spead Operator  -> ...
// Rest Operator -> ...rest

const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a3)