function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

// Colocar métodos fora da função construtora
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Objeto literal
const p2 ={
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);

//p1.aumento(100)
p2.aumento(10)

const p2 = Object.create()// pode receber o objeto literalx


console.log(p1)
console.log(p2)