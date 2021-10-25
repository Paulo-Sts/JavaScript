//Com o require importamos recursos de outros arquivos e usa-los
const moduloA = require("./modulosA")
const moduloB = require("./modulosB")

console.log(moduloA.saudacao)
console.log(moduloA.despedida)
console.log(moduloA) //Um objeto

console.log(moduloB.saudacao)
console.log(moduloB.saudacaoNoite())
console.log(moduloB) //Um objeto

