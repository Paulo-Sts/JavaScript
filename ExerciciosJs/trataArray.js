const valores = [
    {"nome": "aaa", "id": 1},
    {"nome": "aaa", "id": 1},
    {"nome": "aaa", "id": 1},
    {"nome": "aaa", "id": 5},
    {"nome": "aaa", "id": 1}
]

for (index in valores){
    if(valores[index].id == 5){
       const retira = valores.splice(index, 1)
       const novo = valores.concat(retira)
       console.log(novo)
    }
}
