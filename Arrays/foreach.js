//O forEach é uma das formas de percorrer um array

const nomes = ["Carlos", "Ana", "Maggie", "Milton"]

nomes.forEach(function(nome, indice){ //Função do forEach recebe por padrão três parâmetros o primeiro o valor, o segundo o indice e o terceiro o array
    console.log(`${indice + 1}: ${nome}`)
})

//Usando função arrow
nomes.forEach(nome => console.log(nome))