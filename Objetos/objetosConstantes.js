//Os dados armazenados em objetos utilizando constantes podem ser alterados, embora o endereço de memória permaneça o mesmo
//Pois a constante armazena a referência do objeto e não o objeto em si
const pessoa = {nome: "João"}

pessoa.nome = "Eduardo" //Modificando o dado do objeto

//pessoa = {nome: "Cleide"} //Tentando atribuir outro endereço ao objeto (Gera um erro)

//O Object por meio de um método pode bloquear a modificação do objeto o tornando constante
Object.freeze(pessoa)
pessoa.nome = "Rodrigo" //Novos atributos Não são adicionados
pessoa.idade = 23
console.log(pessoa)

//Definindo o objeto e o tornando constante
const carro = Object.freeze({nome: "Fox", ano: 2011, cor: "Cinza" })
console.log(carro)