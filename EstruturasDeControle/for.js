//O For é útil para exucutar um bloco de sentenças um número determinado de vezes

/* for(variável; condiçãoBooleana; incrementoVariável){
    Sentença de código a ser executada
}*/

for(let valor = 1; valor < 10; valor++){
    console.log(`Valor: ${valor}`)
}

for(let contador = 0; contador < 5; contador++){
    let asterisco = "*"
    console.log(asterisco.repeat(contador))
}

//Podemos usar o for para acessar os valores de um Array
const arrayNotas = [3.5, 10, 9.8, 7, 0.5]

for(let i = 0; i < arrayNotas.length; i++){
    console.log(`Notas: ${arrayNotas[i]}`)
}

//Com o For in podemos percorrer arrays e também objetos
/*
for( variavelQueRecebeIndiceOuAtributo in arrayOuObjeto){

}
*/ 

const notas = [7, 3.4, 8, 10]

for(let indice in notas){
    console.log(`Indice: ${indice} Valor: ${notas[indice]}`)
}

const meusDados = {
    nome: "Paulo",
    idade: 23,
    peso: 67,
    sexo: "Masculino"
}

for(let atributo in meusDados){
    console.log(`${atributo}: ${meusDados[atributo]}`)
}
