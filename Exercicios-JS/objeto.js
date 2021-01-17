const prod1 = {}
prod1.nome = 'Celular Ultra Mega'; //define um atributo para o objeto
prod1.preco = 4989.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaços

console.log(prod1)


const prod2 = {
    nome: 'Camisa polo',
    preço: 79.90,
    obj: {
        blablabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)