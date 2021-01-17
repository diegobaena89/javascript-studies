const escola = "Cod3r";

console.log(escola.charAt(4)); //mostra qual é a 4o indice da palavra
console.log(escola.charCodeAt(3)); //pega o valor na tabela UniCode
console.log(escola.indexOf('3')) //retorna a letra no indice 3

console.log(escola.substring(1)) //escreve a string do indice escolhido pra frente
console.log(escola.substring(0,3)) //escreve o indice 0 até o indice 3, nao incluindo o 3

console.log('Escola '.concat(escola)) //concatena as strings
console.log(`Escola ${escola}`) //Template String
console.log('Escola ' + escola) //outro tipo de concatenação

console.log(escola.replace(3, 'e')) //substitui o valor do indice pelo valor no ''
