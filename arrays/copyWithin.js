// Esse médoto move elementos de uma array para outra posição dentro do próprio array, sem alterar o seu tamanho

let carros = ['Gol', 'Fox', 'Polo', 'Uno', 'Golf', 'Virtus', 'Passat']

carros.copyWithin(0, 5) // Para valores negativos a contagem é feita a partir do último elemento do array

console.log(carros)