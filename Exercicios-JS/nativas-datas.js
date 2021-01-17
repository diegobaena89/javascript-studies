let data = new Date()
console.log(data) // retorna um noov objeto de data (ano, mes, dia, hora) - onde o browser está rodando

let diaDoMes = data.getDate()
console.log(diaDoMes) // volta o dia do Mês

let mes = data.getMonth() +1;
console.log(mes) //volta como índex, não o mes

let ano = data.getFullYear()
console.log(ano) // retorna o ano

console.log(`${diaDoMes}/${mes}/${ano}`)