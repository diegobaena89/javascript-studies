// Notação de classe
class Produto {
  constructor(descricao, preco) {
    this.descricao = descricao;
    this.preco = preco;
  }
  verDescricao() {
    console.log(`${this.descricao} por apenas ${this.preco}`);
  }
}

let produto = new Produto('Notebook', 2200);
produto.verDescricao();

// Obj literal - é descrito dentro do código
let produtoLiteral = {
  descricao: 'Geladeira',
  preco: 1800,
  verDescricao: function () {
    console.log(`${this.descricao} por apenas ${this.preco}`);
  },
};

produtoLiteral.verDescricao();
