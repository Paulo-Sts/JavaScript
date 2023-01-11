// Esse método retorna o primeiro elemento do array que satistaz a condição definida via função ou retorna undefined caso nenhum elemento satisfaça a condição

let numbers = [1, 2, 3, 60, 54, 0, -1 , 6000]

console.log(numbers.find(element => element < 0))