// EXERCÍCIOS FILTER E MAP
const pessoas = [
    {nome: "Luiz", profissao: "Análise de Sistemas Sênior", idade:55},
    {nome: "Maria", profissao: "Análise de Sistemas Jr", idade: 32},
    {nome: "Joana", profissao: "Desenvolvedora FullStack", idade: 41},
    {nome: "Luciano", profissao: "Desenvolvedor Front End jr", idade: 28},
    {nome: "Fernando", profissao: "Vendedor", idade: 22},
    {nome: "Bianca", profissao: "Gerente de Vendas", idade: 35},
    {nome: "Pedro", profissao: "Representante Comercial", idade: 40},
];

// Retorne pessoas que tem nome com 5 letras ou mais
// pessoas com menos de 30 anos
// pessoas cujo nome termina com 'a'
// retorne apenas os 'jr' da empresa

// um string com o nome das pessoas
// retorne a chave 'profissão'
// Adiciona a chave 'salário'

const nomeComCincoLetras = pessoas.filter(obj => obj.nome.length >=5);
const pessoasComMenosDeTrinta = pessoas.filter(obj => obj.idade < 30);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
const apenasJr = pessoas.filter(obj => obj.profissao.toLowerCase().endsWith('jr'));

const apenasNomeString = pessoas.map(obj => obj.nome);
const retornaProfissao = pessoas.map(obj => obj.profissao);
const adicionaSalario = pessoas.map()