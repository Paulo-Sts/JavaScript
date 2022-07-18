// Esse método percorre um array e o transforma em um novo array de igual tamanho porém com dados modificados
const numeros = [1, 2, 3, 4]

let resultado = numeros.map(function(elemento){ // Criando um novo array com os valores dobrados
    return elemento * 2
})

console.log(resultado)