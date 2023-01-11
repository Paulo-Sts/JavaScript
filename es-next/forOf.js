// É um novo tipo de laço que intera a partir de valores

// Interando uma string
for (let letra of "Paulo"){
    console.log(letra)
}

// Interando um array
const tecs = ['Js', 'Typescript', 'Vue', "Flutter"]

for (let tec of tecs){
    console.log(tec)
}

// Interando um Map
const assuntoMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntoMap){ // Interando todo o Map
    console.log(assunto)
}

for (let chave of assuntoMap.keys()){ // Interando as chaves
    console.log(chave)
}

for (let valor of assuntoMap.values()){ // Interando os valores
    console.log(valor)
}