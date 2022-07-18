// O For é útil para exucutar um bloco de sentenças um número determinado de vezes

/* 
for(variável; condiçãoBooleana; incrementoVariável){
    Sentença de código a ser executada
}
*/

for(let valor = 1; valor < 10; valor++){
    console.log(`Valor: ${valor}`)
}

for(let contador = 0; contador < 5; contador++){
    let asterisco = "*"
    console.log(asterisco.repeat(contador))
}

// Podemos usar o for para acessar os valores de um Array
const arrayNotas = [3.5, 10, 9.8, 7, 0.5]

for(let i = 0; i < arrayNotas.length; i++){
    console.log(`Notas: ${arrayNotas[i]}`)
}


