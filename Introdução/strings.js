//Strings são cadeias de caracteres, elas são definidas entre aspas simples ou duplas ou entre crase

const meuNome = "Paulo"
const meuSegundoNome = 'Eduardo'

//Algumas funções presentes no tipo String

console.log(meuNome + meuSegundoNome) //concatenação
console.log(meuNome.concat(" Santos")) //concatenação
console.log(meuNome.replace("P", "S")) //subtitui um caractere por outro
console.log(meuNome.substring(2)) //retorna um intervalo dos caracteres
console.log('Paulo, Eduardo, dos, Santos'.split(",")) //converte literais em um array

//A definição de strings utilizando a crase permite adicionar expressões e quebras de linha

const cachorro = "Mel"
const raca = 'viralata'
console.log( ` ${cachorro}
é o nome da minha cachorra
    ela é da raça ${raca}
`)