//Tipos númericos são definidos como number

const nota1 = 6.0
const nota2 = 9.3
console.log(typeof nota1)
console.log(typeof nota2)

const total = Number(nota1 + nota2) // A função Number fornece um conjunto de métodos para manipulação de números
console.log(total)
console.log(Number)

const media = total / 2
console.log(media)
console.log(media.toFixed(1)) // Método Number para definir a quantidade de casas decimais

//JavaScript permite algumas interações diferentes de outras linguagens.

let divisaoPorZero = 10 / 0
console.log(divisaoPorZero)

let operacaoNumeroString = "20" / 2
console.log(operacaoNumeroString)