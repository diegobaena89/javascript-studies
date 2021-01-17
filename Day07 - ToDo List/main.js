const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li') //cria a li
  return li;
}

// FUNÇÃO QUE CRIA A TAREFA AO PRESSIONAR ENTER
inputTarefa.addEventListener('keypress', function(e) {  
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

// FUNÇÃO QUE LIMPA O CAMPO DO INPUT DEPOIS DE ADD A TAREFA
function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus(); // cria foco no input
}

// FUNÇÃO QUE CRIA UM BOTÃO PARA APAGAR TAREFAS
function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

// FUNÇÃO QUE PEGA O TEXTO DO INPUT E CRIA UMA TAREFA NA LI
function criaTarefa (textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li); //adiciona um filho ao pai, ou seja, um li na ul
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

// EVENTO QUE, AO CLICAR, RETORNA O VALOR DO INPUT
btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;
  
  if (el.classList.contains('apagar')) { 
    el.parentElement.remove();
    salvarTarefas();
  }
});

// FUNÇÃO QUE SALVA AS TAREFAS A SEREM REALIZADAS
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

// FUNÇÃO QUE LE AS TAREFAS E AS JOGA DE VOLTA NA UL QD O NAVEGADOR É ABERTO NOVAMENTE
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
}
adicionaTarefasSalvas();