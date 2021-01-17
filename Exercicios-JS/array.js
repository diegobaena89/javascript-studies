const valores =  [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]) //acessa os valores dos índices indicados

valores[4] = 10.9; //adiciona um elemento a um índice que não existe antes

console.log(valores);
console.log(valores.length); //mostra o tamanho do array, ou seja, quantos elementos o array tem

valores.push(3.4); //adiciona um valor no fim do array
console.log(valores)

valores.pop() //tira o último valor do array
console.log(valores);

delete valores[1] //deleta um elemento de um determinado indice
console.log(valores)

console.log(typeof valores)