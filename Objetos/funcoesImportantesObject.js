const pessoa = {
    nome: "Eduardo",
    idade: 23,
    peso: 68
}

// Acessar chaves do objeto
console.log(Object.keys(pessoa))

// Acessar valores do objeto
console.log(Object.values(pessoa))

// Acessar chaves e valores do objeto
console.log(Object.entries(pessoa)) //Retorna um array com um conjunto de arrays da chave e valor

// Define propriedades do objeto com características específicas para a propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // Define se a propriedade pode ser listada
    writable: false, // Define se o valor da propriedade pode ser alterada
    value: "02/04/1998" // Define o valor da propriedade
})

console.log(Object.entries(pessoa))

// Concatena objetos

const obj0 = {a: 1}
const obj1 = {b: 10}
const obj2 = {c: 100}
const destino = Object.assign(obj0, obj1, obj2)
console.log(destino)
