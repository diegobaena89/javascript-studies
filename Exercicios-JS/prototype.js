// Construtora - > Molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

// Instância
const pessoa1 = new Pessoa('Diego', 'Baena'); // <- Pessoa = Função Constutora
const pessoa2 = new Pessoa('Rosana', 'Baena');
console.log(pessoa1)
console.log(pessoa2)
