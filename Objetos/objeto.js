// Um objeto é uma coleção dinâmica de chave e valor

const produto = new Object // Cria um novo objeto a partir da função Object

// Adicionando atributos dinâmicamente ao objeto
produto.nome = "Cadeira"
produto["Marca produto"] = "Genérico"
produto.preco = 20

// Apagando dinâmicamente atributos do objeto
delete produto.preco

// Objeto complexo formado por um array de objetos
const carro = {
    modelo: "Fox",
    ano: 2011,
    proprietario:{
        nome: "Cleide",
        idade: 53,
        endereço:{
            logradouro: "Pará",
            numero: 47
        }
    },
    condutores: [{
        nome: "Eduardo",
        idade: 23
    }, {
        nome: "João",
        idade: 20
    },{
        nome: "Rodrigo",
        idade: 29
    }]
}

// Acesso ao Objeto
console.log(carro.modelo)
console.log(carro["proprietario"]["endereço"]["logradouro"])
