// Funções Anônimas são Funções sem nome

const soma = function(a,b){
    return a + b
}

const subtraçao = function(a, b){
    return a - b
}

const divisao = function(a, b){
    return a / b
}

const multiplicaçao = function(a, b){
    return a * b
}

const imprimeResultado = function(a, b, operacao){
    console.log(operacao(a, b))
}

imprimeResultado(2, 2, soma)
imprimeResultado(2, 2, subtraçao)
imprimeResultado(2, 2, divisao)
imprimeResultado(2, 2, multiplicaçao)

// Também pode ser usada como atributo de um objeto

const cachorro = {
    latir: function(){
        console.log("Au Au")
    }
}

cachorro.latir()