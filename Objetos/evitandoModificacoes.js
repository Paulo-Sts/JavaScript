//Podemos restringir o comportamento de objetos através de métodos de Object

//Object.preventExtensions()
//Limitar o número de atributos de objeto
const produto = Object.preventExtensions({
    nome: "arroz", preco: 7.99, secao: "cereais" //Assim não é possível adicionar atributos, apenas remevê-los
})

//Visualizando:
console.log("É extensível: ", Object.preventExtensions(produto))

//Object.seal()
//Limita a adição e exclusão de novos atributos
const produto2 = Object.seal({
    nome: "feijão", preco: 9.99, secao: "cereais" //Com esse método é possível apenas modificar os valores do atributo
})
