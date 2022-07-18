// O for ... in cria um laço que interage com as propriedade de um objeto ou indices de um array percorrendo cada propriedade.
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