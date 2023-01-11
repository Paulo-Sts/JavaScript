// Em javascript o array é um objeto

console.log(typeof Array, typeof [])

// O array é uma estrutura heterogênia, de tamanho dinâmico e seguindo a linguagem é de tipagem dinâmica e fraca

let carros = new Array("Gol", "Fox", "Uno") // Podemos definir um array por meio do NEW
let motos = ["Honda", "Yamaha", "kawasaki"] // Assim como seguindo a notação literal

carros = ["Mercedes", "Audi", "Volvo"]// Podemos reatribuir valores a um array

// O acesso aos valores do array é por meio do seu indice
for (let i = 0; i < carros.length; i++){
    console.log(carros[i])
}

for (let i = 0; i < motos.length; i++){
    console.log(motos[i])
}

// Algumas funções do array

motos.push("Ducati") // Adiciona um valor ao fim do arrray
console.log(motos.length) // Informa o número de elementos do array

carros[6] = "Ferrari" // Podemos atribuir um valor a uma posição além do último elemento do array
console.log(carros) // O intervalo que não tem elementos fica definido como undefined
carros.sort() // Ordena o arrray
console.log(carros)

delete carros[1] // Deleta um valor
console.log(carros)

carros.splice(1, 1) // Adiciona e elimina elementos (valor 1 indica a posição a partir do qual se mudará, valor 2 o número de elementos a excluir)
console.log(carros)
carros.splice(1, 0, "Ferrari", "Lamborghine") // Depois adiciona-se os valores que se deseja adicionar
console.log(carros)
