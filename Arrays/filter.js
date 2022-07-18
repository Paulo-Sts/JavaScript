// Esse método filtra os valores do array de acordo com uma condição e retorna true ou false
const produtos = [
    {nome: "Monitor", preco: 700.0, fragil: true},
    {nome: "Celular", preco: 1400.0, fragil: true},
    {nome: "Travesseiro", preco: 50.0, fragil: false},
    {nome: "Travessa de cristal", preco: 320.0, fragil: true}
]

console.log(produtos.filter(function(p){
    return produtos.fragil
}))

const caro = produtos => produtos.preco > 200
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro))
console.log(produtos.filter(fragil))