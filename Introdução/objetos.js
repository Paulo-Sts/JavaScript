//Em JavaScript objetos são coleções de pares chave valor que definem um tipo

const livro1 = {} //Definição de um objeto vazio

livro1.titulo = "O Silmarillion" //Podemos definir os atributos de um objeto dinâmicamente
console.log(livro1)

livro1.escritor = "J.R.R.Tolkien"
livro1.anoLancamento = 1977
console.log(livro1)

//Podemos também definir um objeto usando a notação liretal
const livro2 = {
    nome: "21 lições para o século 21",
    autor: 'Yuval Noah Harari',
    preco: 44.99
}

console.log(livro2)
livro2.paginas = 459
console.log(livro2)
console.log(livro2.autor)
