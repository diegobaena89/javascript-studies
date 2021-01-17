const funcionarios = [
    {nome: "Isabela", idade: 25, cargo: "Analista de Sistemas", salario: 2580},
    {nome: "Jonathan", idade: 42, cargo: "Dev Front End", salario: 5950},
    {nome: "Derick", idade: 21, cargo: "Estagiário Dev Web", salario: 1250},
    {nome: "Luciana", idade: 30, cargo: "Engenheira de Software", salario: 8300},
    {nome: "Francielle", idade: 29, cargo: "Analista de compras", salario: 3350},
    {nome: "Júlio", idade: 48, cargo: "Gerente Comercial", salario: 7980},
];

console.log(funcionarios)

// Retornar funcionarios mais velhos que 25 anos
// Retornar funcionarios que ganham mais de 5 mil reais
// Retornar funcionarios que terminam com a letra  a

const funcionariosMaisVelhos = funcionarios.filter(obj => obj.idade > 25);
console.log(funcionariosMaisVelhos);

const funcionariosQueGanhamMais = funcionarios.filter(obj => obj.salario > 5000);
console.log(funcionariosQueGanhamMais);

const funcionariosTerminamComA = funcionarios.filter( obj => obj.nome.toLowerCase().endsWith('a'));
console.log(funcionariosTerminamComA)