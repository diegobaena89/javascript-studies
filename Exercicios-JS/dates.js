let data = new Date();
/*
//Adicionar ou remover dias da data
console.log(data.toString());
data.setDate(data.getDate() + 1); //adiciona um dia
console.log(data.toString());
console.log('====================')
// Adicionar/remover meses
console.log(data.toString())
console.log(data.getMonth() + 1)
console.log(data.toString())
console.log('====================')
//Adicionar/remover anos
console.log(data.toString())
console.log(data.getFullYear() + 1);
console.log(data.toString())*/

let data1 = new Date(2017, 0, 15);
let data2 = new Date(2017, 1, 23);
console.log(data1.toString())
console.log('=========================================')
console.log(data2.toString())
console.log('=========================================')

// converter as datas para algo que possamos calcular
console.log(data1.getTime());
console.log(data2.getTime());

//encontrar a qtde de mls entre data 1 e data 2
let mlsEntreDatas = Math.abs(data1.getTime() - data2.getTime());

// 1 dia tem 24h, cada h tem 60m, 1m tem 60s e 1s tem  1000mls
//quantos mls tem em um dia?
let mlsPorDia = (1*24*60*60*1000);
console.log('1 dia tem: ' + mlsPorDia + ' milisegundos')
console.log('A diferença entre data 1 e data 2 é de: ' + Math.ceil(mlsEntreDatas / mlsPorDia) + ' dias')