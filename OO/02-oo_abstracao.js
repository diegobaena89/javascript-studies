// entidade         identidade          caracteristicas         ação
//um software de marcenaria
//cadeira e sofá

// paradigma procedural
/*
//cadeira
let qtdePernas = 4;
let giratoria = false;
let cor = 'azul';

//array de cadeiras
let cadeiras = Array()

cadeiras[0] = Array()
cadeiras[0]['qtdePernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'branca'

cadeiras[1] = Array()
cadeiras[1]['qtdePernas'] = 4
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'


function giraCadeira(indice) {
  if (cadeiras[indice]['giratoria'] === true) {
    console.log("girou");
  } else {
    console.log("cadeira não é giratória");
  }
}

function adicionarCadeira(qtdePernas, giratoria, cor) {
    let cadeira = Array()

    cadeira['qtdePernas'] = qtdePernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    cadeiras.push(cadeira)
}

adicionarCadeira(3, false, 'verde')

console.log(cadeiras)*/

// -----------------------------------------------------

// paradigma de OO

class Cadeira {
  constructor(qtdePernas, giratoria, cor) {
    this.qtdePernas = qtdePernas;
    this.giratoria = giratoria;
    this.cor = cor;
  }

  girarCadeira() {
    if (this.giratoria === true) {
      console.log("Girou");
    } else {
      console.log("Cadeira não é giratória");
    }
  }
}

let cadeira = new Cadeira(4, false, "marrom");
cadeira.girarCadeira();
console.log(cadeira);

let cadeira2 = new Cadeira(1, true, 'rosa')
cadeira2.girarCadeira()
console.log(cadeira2)

let cadeiras = Array()
cadeiras.push(new Cadeira(4, false, 'amarela'))
console.log(cadeiras)