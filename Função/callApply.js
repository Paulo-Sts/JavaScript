//Existem diferentes formas de chamar uma função em Javascript

function getPreco(imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto1 = {
    nome: "moto",
    preco: 5000,
    desc: 0.1,
    getPreco
}

console.log(getPreco()) //Como o this está no escopo global ele não enxerga o contexto léxico do objeto produto
console.log(produto1.getPreco()) //Agora ele reconhece

console.log(getPreco.call(produto1)) //Usando o call para chamar 
console.log(getPreco.call(produto1, 0.1))//o call funciona definindo o contexto como primeiro parâmetro e após demais os parâmetros 
console.log(getPreco.apply(produto1)) //Usando o apply para chamar
console.log(getPreco.apply(produto1, [0.1]))//O apply funciona definindo o contexto como primeiro parâmetro e após os demais dentro de um array