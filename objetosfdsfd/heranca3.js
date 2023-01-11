// É possível definir uma relação de herança por meio do método create de Object
const pai = {nome: "José", corCabelo: "Loiro"}

const filha1 = Object.create(pai)
filha1.nome = "Maria"
console.log(filha1.corCabelo)

// Podemos definir como se comporta o atributo de um objeto também a partir do Object.create
const filha2 = Object.create(pai, {
    nome: {value: "Ana", Writable: false, enumerable: true}
})

console.log(filha2.nome)

// Forma de verificar se um atributo pertence ao objeto ou herda por Herança do atributos
for (let atributo in filha2){
    filha2.hasOwnProperty(atributo) ?
    console.log(atributo) : console.log(`Herda por Herança: ${atributo}`)
}