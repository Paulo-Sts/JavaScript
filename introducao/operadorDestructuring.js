// Novo Recurso do ES6
// Esse operador é usado para acessar atributos de objetos e funções de forma "não estruturada"

let carro = {
    modelo: "Gol",
    ano: 2021,
    cor: "Azul",
    motor: {
        nome: "MSI",
        cilindradas: 160,
        pontencia: 90,
        torque: 14.9
    }
}

// Operador destructuring
let {modelo, cor} = carro
console.log(modelo, cor)

// Acessando atributos de um objeto que está dentro de outro
let {motor:{nome, torque}} = carro
console.log(nome, torque)

// Atribuindo o acesso do valor do atributo a uma outra "variável"
let {ano: a, cor: c} = carro
console.log(a, c)

// Usando o operador destructuring para acessar elementos de um array
let arrayUm = [11, 24, 32, 4222, 65, 100]

let [numero1, numero2, numero3, numero4, numero5, numero6] = arrayUm

console.log(numero1, numero2, numero3, numero4, numero5, numero6)