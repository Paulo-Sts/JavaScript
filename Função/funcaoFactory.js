// Funções Factory são usadas para a partir de uma função criar objetos

function criaCarro(nome, ano, cor){
    return{
        nome: nome,
        ano: ano,
        cor: cor
    }
}

const carro1 = criaCarro("Fox", 2011, "Cinza")

console.log(carro1)