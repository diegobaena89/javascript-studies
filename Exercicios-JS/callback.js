function exibirArtigo(id, callbackSucesso, callbackErro) {
    //recuperar o id via requisição http
    if(true) {
        callbackSucesso('Funções de callback em Js', 'Funções de callback são muito utilizadas');
    } else {
        callbackErro('Erro ao recuperar os dados');
    }
}

let callbackSucesso = function(titulo, descricao) {
    console.log(titulo)
    console.log('=========================================')
    console.log(descricao)
}

let callbackErro = function(erro) {
     console.log('Erro!!!')
}

exibirArtigo(1, callbackSucesso, callbackErro)