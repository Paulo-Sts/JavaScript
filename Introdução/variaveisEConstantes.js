// var nomeVariável = dado
var numeroUm = 4
let numeroDois = 25

console.log(numeroUm, numeroDois)

// Variáveis de tipo var permitem a sua redeclaração já variáveis de tipo let não permitem 

var numeroUm = 3
numeroDois = 2

console.log(numeroUm, numeroDois)

// Variáveis de valor fixo são definidas como constantes
const pi = 3.14

/*
OBS: Em javascript existe uma propriedade chamada de hoisting(içamento) que é a ação de a linguagem 
mover a declaração de um var para o topo no momento de interpretar o código, fazendo assim com que uma
uma variável declarada depois de ser chamada seja considerada válida.
*/

console.log("ValorAntes: ", valor)
var valor = 30
console.log("ValorDepois: ", valor)