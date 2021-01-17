// defineProperty - > define uma propriedade  | defineProperties -> define várias propriedades
function Produto(nome, preco, estoque) {
    this.nome = nome; // publico
    this.preco = preco; // publico

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: false, //o valor pode ser alterado? não (false) sim (true)
        configurable: false // pode apagar a chave? reconfigurá-la?
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            vaçie: nome,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        },
    });
};

const produto1 = new Produto('Camiseta', 20, 3);
// console.log(Object.keys(produto1));
console.log(produto1);

for (let chave in produto1) {
    console.log(chave)
};

// ------------------------------