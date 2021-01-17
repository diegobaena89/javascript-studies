// defineProperty - > define uma propriedade  | defineProperties -> define várias propriedades
/*function Produto(nome, preco, estoque) {
    this.nome = nome; // publico
    this.preco = preco; // publico

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: false,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                new TypeError('Mensagem')
            }
            estoquePrivado = valor;
        }
    });
};

const produto1 = new Produto('Camiseta', 20, 3);
//console.log(produto1);
produto1.estoque = 500;
console.log(produto1.estoque)*/

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer Coisa'
console.log(p2.nome)