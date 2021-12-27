//É uma estrutura de dados (conjunto) não indexada e que não aceita repetição
const numeros = new Set()

//Adiciona elementos ao conjunto
numeros.add(1)
numeros.add(2)
numeros.add(3).add(4).add(5)
numeros.add(5)

console.log(numeros)

//Métodos de um Set
console.log(numeros.size) //Quantidade de itens
console.log(numeros.has(4)) //Verifica se o valor faz parte 
numeros.delete(2) //Apaga um valor

//Criando um conjunto a partir de um array
const nomes = ['Paulo', 'Pedro', 'Lucas', 'Marcos', 'Paulo']

const nomesConjunto = new Set(nomes)

console.log(nomesConjunto)
