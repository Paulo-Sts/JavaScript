//Esse método transforma um array em outros tipos
const alunos =[
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.7, bolsista: true},
    {nome: "Tiago", nota: 8.5, bolsista: false},
    {nome: "José", nota: 7.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})