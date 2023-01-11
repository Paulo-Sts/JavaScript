// Esse operador ... pode ser utilizado para juntar (rest) ou espalhar (spread) dados

// Usando spread em um objeto
const dados = {nome: "Paulo", sobrenome: "Santos"}

const dadosColetados = {idade: 23, ...dados}

console.log(dadosColetados)

// Usando spread em um array
const pessoas = ['Paulo', 'José', 'Maria']

const todasPessoas = ['Tiago', 'Cleide', ...pessoas]

console.log(todasPessoas)