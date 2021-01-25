//encapsular é uma forma de dar visibilidade aos atributos e métodos de acordo com nossas necessidades

class Tv {
    constructor(){
        this._relacaoDeCanais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 5
        this._volume = 5
    }
    // getters e setters
    // dão a possibilidade de recuperar e de setar atributos privados
    get canalAtivo() {
        return this._canalAtivo
    }
    set canalAtivo(canal) {
        //controle para ver se este canal está ou não disponível na relação de canais
        if (this._relacaoDeCanais.indexOf(canal) !== -1){
            this._canalAtivo = canal
        } 
        
    }
}

let tv = new Tv()
tv.canalAtivo = 3
console.log(tv.canalAtivo)