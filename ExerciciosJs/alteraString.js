let nome = 'Paulo'

let extrai = nome.slice(0, 1)

nome = nome.replace(extrai, 'a')
console.log(extrai)
console.log(nome)




// console.log(techs[0].replace(techs[0].slice(0,1),'A'))

let techs = ['front', 'back' , 'full']

var newTechs = []

for (let index of techs){
    let word = index.slice(0, 1)
    console.log(index)
    newTechs.push(index.replace(word, "A"))
}

console.log(newTechs)