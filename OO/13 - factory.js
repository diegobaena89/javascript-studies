// FUNÇÕES FACTORY
// Através do padrão de projeto Fatory nós podemos implementar uma
// "fabrica" para criação de nossos objetos em tempo de execução
// A função Factory retorna um objeto

let Bicicleta1 = {
  cor: 'Branca',
  marcha: 'única',
  aro: 12,
  pedalar() {
    console.log('Método pedalar executado');
  },
};

let Bicicleta2 = {
  cor: 'Vermelha',
  marcha: '18',
  aro: 26,
  pedalar() {
    console.log('Método pedalar executado');
  },
};

let BicicletaFactory = function (cor, marcha, aro, tipoPedal) {
  return {
    cor,
    marcha,
    aro,
    tipoPedal,
    pedalar() {
      console.log('Método pedalar executado');
    },
  };
};

let Bicicleta3 = BicicletaFactory('Vermelha', '18', 26);
console.log(Bicicleta3);

let Bicicleta4 = BicicletaFactory('Verde', '12', 26);
console.log(Bicicleta4);
