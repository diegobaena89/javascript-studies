// polimorfismo é a sobrescrita de metodos recebidos no objeto filho do objeto pai
// sobrscreve-se o comportamento que quer mudar.

class Animal {
  constructor(cor, tamanho, peso) {
    this.cor = cor;
    this.tamanho = tamanho;
    this.peso = peso;
  }
  dormir() {
    console.log('Dormir');
  }
}

class Passaro extends Animal {
  constructor(bico, cor, tamanho, peso) {
    super(cor, tamanho, peso);
    this.bico = bico;
  }
  voar() {
    console.log('Voar');
  }
}

class Papagaio extends Passaro {
  constructor(sabeFalar, cor, tamanho, peso) {
    super('Médio', cor, tamanho, peso);
    this.sabeFalar = sabeFalar;
  }
  falar() {
    console.log('falar');
  }
}

class Avestruz extends Passaro {
  constructor() {
    super('Grande', 'Branco e Preto', 250, 15000);
  }
  enterrarCabeca() {
    console.log('Enterrar a cabeça');
  }

  voar() {
    console.log('Não sabe voar');
  }
}

let papagaio = new Papagaio(true, 'Verde', 25, 350);
console.log(papagaio);
papagaio.voar();

let avesruz = new Avestruz();
avesruz.enterrarCabeca();
avesruz.voar();
