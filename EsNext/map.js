// É uma nova estrutura de dados chave valor em que a chave pode ser formada por diferentes tipos

const tecnologias = new Map()

tecnologias.set('Javascript', {framework: false})

tecnologias.set('Angular', {framework: true})

console.log(tecnologias.get('Javascript'))
console.log(tecnologias.get("Javascript").framework)

// Outra forma de criar um Map
const variadasChaves = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

variadasChaves.forEach((vl, ch) => {
    console.log(ch, vl)
})

// Métodos do Map
console.log(variadasChaves.has(123))

console.log(variadasChaves.delete(123))

console.log(variadasChaves.size)