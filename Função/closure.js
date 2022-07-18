// Closure é o escopo que uma função tem quando é definida, o closure permite que uma função acesse variáveis externas a ela.

const valor = "Global"

function fora(){
    const valor = "Local"
    function dentro(){
        return valor
    }
    return dentro
}

const chamandoFuncao = fora()
console.log(chamandoFuncao()) 

// Mesmo tendo uma variavel com mesmo nome, a função dentro() pelo seu escopo "lembra" da variável valor que está no seu closure devido ao seu contexto léxico.
