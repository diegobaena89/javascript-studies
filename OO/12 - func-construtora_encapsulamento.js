// a ideia do encapsulamento é fazer com que atrituros e métodos sejam públicos,
// protegidos ou privados, ou seja, são operadores que permitem atribuir níveis
// de visibilidade pros atributos e métodos de um objeto.

let Carro = function () {
  this.cor = 'Amarelo';
  this.modelo = 'Chevete';
  this.velocidadeAtual = 0;
  this.velocidadeMaxima = 180;

  //atributo que recebe uma função
  this.acelerar = function () {
    let velocidade = this.getVelocidadeAtual() + 50;
    if (velocidade > this.velocidadeMaxima) {
      velocidade = this.velocidadeMaxima;
    }
    this.setVelocidadeAtual(velocidade);
  };
  this.getVelocidadeAtual = function () {
    return this.velocidadeAtual;
  };
  this.setVelocidadeAtual = function (velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual;
  };
};

let carro = new Carro();
console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);
carro.acelerar();
console.log(carro.velocidadeAtual);

let Carro2 = function () {
  var velocidadeMaxima = 180;

  this.cor = 'Amarelo';
  this.modelo = 'Chevete';
  this.velocidadeAtual = 0;

  //atributo que recebe uma função
  this.acelerar = function () {
    let velocidade = this.getVelocidadeAtual() + 50;
    if (velocidade > velocidadeMaxima) {
      velocidade = velocidadeMaxima;
    }
    this.setVelocidadeAtual(velocidade);
  };
  this.getVelocidadeAtual = function () {
    return this.velocidadeAtual;
  };
  this.setVelocidadeAtual = function (velocidadeAtual) {
    this.velocidadeAtual = velocidadeAtual;
  };
};

let carro2 = new Carro2();
console.log(carro2.velocidadeAtual);
carro2.acelerar();
console.log(carro2.velocidadeAtual);
carro2.acelerar();
console.log(carro2.velocidadeAtual);
carro2.acelerar();
console.log(carro2.velocidadeAtual);
carro2.acelerar();
console.log(carro2.velocidadeAtual);

console.log(carro);
console.log(carro2);
