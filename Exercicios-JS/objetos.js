const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa.sobrenome); //mais intuitiva e mais simples

// -------------

const pessoa1 = new Object();
pessoa1.nome = 'Diego';
pessoa1.sobrenome = 'Baena';
pessoa1.idade = 31;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

// Factory Functions / Constructor Functions (padrões de projetos) / Classes

// Factory Function
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Diego', 'Baena');
console.log(p1.nomeCompleto)


// Constructor Function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa('Luiz', 'Miranda');
console.log(p2)