// No Js a herança funciona a partir da propriedade PROTOTYPE, que funciona como referência, apontando para o objeto pai por padrão como Object
const ferrari = {
    modelo: "F40",
    velMax: 24
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__) // Por meio do __proto__ podemos acessar o objeto pai padrão do objeto atual
console.log(ferrari.__proto__ === Object.prototype)// A propriedade prototype de object é diferente do conceito PROTOTYPE de herança dos objetos
console.log(volvo.__proto__ === Object.prototype) // Prototype é uma funcionalidade da função Object
                                                    