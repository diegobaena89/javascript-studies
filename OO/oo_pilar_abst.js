//Entidade        Identidade - (class())  Característica - (constructor())        Ações (metodos()) - comportamentos da vida real que são levados p/ programação
//carro           x = new Carro ()        marca, modelo, cor, qtdePortas          ligar, acelerar, freirar, desligar
//Sonho           z = new Sonho ()        tipo, história, sonharDenovo            exibirHistória
//contaBancaria   y = new contaBanc ()    agencia, numeroConta, saldo, limite     depositar, sacar, consultaSaldo

// Entidade - conta bancária. Definimos esse modelo de entidade com o operador chamado class
// a class representa o modelo da entidade ou objeto, mas não é o objeto/modelo

//modelo do objeto
class ContaBancaria {
  //agencia
  //numeroConta
  //saldo
  //limite
  constructor() {
    this.agencia = 1075;
    this.numeroConta = 8351125;
    this.saldo = 50;
    this.limite = 450;
  }
  depositar(valorDeposito) {
    this.saldo += valorDeposito;
  }
  sacar(valorSaque) {
    this.saldo -= valorSaque;
  }
  consultarSaldo() {
    return this.saldo;
  }
}
//para criar a entidade, precisar dar a ela uma identidade:
 let x = new ContaBancaria()

 console.log(`Seu saldo é de ${x.consultarSaldo()}`)
 x.depositar(450)
 console.log(`Seu saldo atual é de ${x.consultarSaldo()}`)
 x.sacar(100)
 console.log(`Seu saldo atual é de ${x.consultarSaldo()}`)
