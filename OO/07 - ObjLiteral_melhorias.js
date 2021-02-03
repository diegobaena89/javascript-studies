let nome = 'Jorge';
let idade = 29;
let sexo = 'Masculino';
let profissao = 'Programador';

let objeto = {
  nome: nome,
  idade: idade,
  sexo: sexo,
  profissao: profissao,
  exibirResumo: function () {
    console.log(
      `${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`,
    );
  },
};

console.log(objeto); // mostra o objeto
objeto.exibirResumo(); // mostra o resumo

// ------------ No ES6 ----------

let objeto2 = {
  nome, // nome = nome da variavel / valor = valor da variavel
  idade,
  sexo,
  profissao,
  exibirResumo() {
    console.log(
      `${this.nome}, ${this.idade} anos, ${this.sexo} é ${this.profissao}`,
    );
  },
};

console.log(objeto2); // mostra o objeto
objeto2.exibirResumo(); // mostra o resumo
