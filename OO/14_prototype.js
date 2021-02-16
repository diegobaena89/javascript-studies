// PROTOTYPE
// Todos os objetos em JS descendem de Object
// Prototype é um modelo, padrão ou tipo de alguma coisa
// Quando criamos um objeto, ele é um descendente de um Object
// métodos e atributos de object são herdados dentro desse objeto criado.

let a1 = {
  cor: 'branco',
  modelo: 'Airbus A380',
  levantarVoo: function () {
    console.log('Levantar Vôo');
  },
};

let AviaoF = function () {
  (this.cor = 'Azul'),
    (this.modelo = 'Boeing 787'),
    (this.levantarVoo = function () {
      console.log('Levantar Vôo');
    });
};

let a2 = new AviaoF();

class AviaoC {
  constructor() {
    (this.cor = 'Vermelho'), (this.modelo = 'Embarae');
  }
  levantarVoo() {
    console.log('Levnatar Vôo');
  }
}
let a3 = new AviaoC();

console.log(a1);
console.log(a2);
console.log(a3);
