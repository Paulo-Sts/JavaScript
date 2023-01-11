// O splice retira elementos a partir da posição os retornando ou adiciona elementos ao array a partir da posição 

let carros = ['Gol', 'Fox', 'Polo', 'Uno', 'Golf', 'Virtus', 'Passat']


carros.splice(1, 1) // Remove o elemento da posiçao 1, retirando 1 elemento
carros.splice(0,0, 'Fusca', 'Parati') // Splice(indiceInicialDeAlteração, elementosARemover, elementosAAdicionar)

console.log(carros)
