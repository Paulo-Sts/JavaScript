const pilotos = ["Massa", "Vettel", "Hamilton", "Alonso"]

//Método que tira o último elemento do array
pilotos.pop()
console.log(pilotos)

//Método que adiciona elemento ao array
pilotos.push("Verstappen")
console.log(pilotos)

//Método que remove o primeiro elemento do array
pilotos.shift()
console.log(pilotos)

//Método que adiciona um elemento na primeira posição do array
pilotos.unshift("Raikkonen")
console.log(pilotos)

//Método que adiciona ou remove elementos definindo a posição
pilotos.splice(2,0, "Bottas", "Rosberg")
console.log(pilotos)
pilotos.splice(4, 1) //Retira um elemento na posição 4 do array
console.log(pilotos)

//Método que cria um novo array a partir de outro em uma posição definida
const pilotos2 = pilotos.slice(2) //Cria um novo array a partir da posição 5
console.log(pilotos2)