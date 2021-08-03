//O JavaScript possuí uma mairo flexibilidade para representar valores lógicos, além do true e false

let valor1 = true
let valor2 = false

console.log(valor1, valor2)

//Podemos representar um booleano com o operador de negação, tornando assim outro tipos de dado em booleanos

let valor3 = 1 
let valor4 = 0

console.log(!!valor1) //Qualquer número diferente de zero pode ser definido como true usando a dupla negação
console.log(!!valor4)

//Exemplos de retorno true

console.log(!! -4)
console.log(!! ' ') //Espaço vazio
console.log(!! []) //Array vazio
console.log(!! {}) //Objeto vazio
console.log(!!Infinity)


//Exemplos de retorno false

console.log(!! '') //String vazia
console.log(!! null)
console.log(!! undefined)
console.log(!! NaN)
