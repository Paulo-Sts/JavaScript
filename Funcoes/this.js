// O this é uma propriedade que referencia o objeto, porém em Js em algumas situações o this pode se comportar de forma diferente

const carro = {
    ronco: "OMMMMMM",
    ligar() {
        console.log(this.ronco) // O this faz referência ao atributo ronco do objeto carro
    }
}

carro.ligar()

let teste1 = carro.ligar // A referência muda e o this dentro da função aponta como underfined
teste1()

let teste2 = carro.ligar.bind(carro) // O bind é uma função que define uma referência fixa para o this
teste2()

/*
    Um outra forma de definir um this que não varia é o atribuindo a uma constante
    no mesmo contexto de referência do atributo do objeto desejado, nesse caso o atributo idade
    pois quando for chamado o this irá referênciar o mesmo objeto
*/

function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/ , 1000)
}

new Pessoa