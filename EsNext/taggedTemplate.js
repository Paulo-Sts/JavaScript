//Essa funcionalidade possibilita processar um template string dentro de uma função


//Exemplo
function tag(partes, ...valores){ //Vai retornar dois arrays
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'João'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)