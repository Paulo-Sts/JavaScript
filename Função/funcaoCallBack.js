// São funções que são chamadas quando um evento acontece

// Exemplo
const linguagens = ["Python", "Java", "Javascript"]

function imprime(nome, indice){
    console.log(`${indice + 1}: ${nome}`)
}

linguagens.forEach(imprime) // O Callback é o processo de chamar a função imprime sempre que passar pelo evento imprimir valor do array