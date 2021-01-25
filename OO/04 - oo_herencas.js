//superclasse é a classe que contem metodos e atributos que são herdados por subclasses - classes pais ou classes filhas

class Animal {
  constructor() {
    this.cor = "";
    this.tamanho = null;
    this.peso = null
  }
  dormir() {
    console.log("Dormir");
  }
}

class Cachorro extends Animal {
  constructor() {
      super()
    this.orelhas = "Grandes e caídas";
  }
  correr() {
    console.log("Correr");
  }
  rosnar() {
    console.log("Rosnar");
  }
}

class Passaro extends Animal{ //extende os recursos da classe 'Animal' como uma herança
  constructor() {
      super() // herda os atributos
    this.bico = "Curto";
  }
  voar() {
    console.log("Voar");
  }
}

class Papagaio extends Passaro{
    constructor() {
        super()
        this.sabeFalar = true
    }
    falar() {
        console.log("falar")
    }
}

let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();

console.log(cachorro)
console.log(papagaio)
console.log(passaro)

/*
cachorro.dormir()
passaro.dormir()
papagaio.falar()
papagaio.dormir()
papagaio.voar()*/