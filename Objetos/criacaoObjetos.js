//Notação Literal
const objeto1 = {

}

//Funcão Object
const objeto2 = new Object

//Funções Construtoras (Você cria sua própria função para definir objetos)
function Objeto(nome, tipo, tamanho){
    this.nome = nome
    this.tipo = tipo
    this.tamanho
}

const objeto3 = new Objeto("Fox", "Carro", "4 Metros")

//Função Factory
function criaObjeto(nome, tipo, tamanho){
    return {
        nome,
        tipo,
        tamanho
    }
}

const objeto4 = new criaObjeto("Mel", "cachorro", "1.3 metros")

//Object.create
const objeto5 = Object.create(null)
objeto5.nome = "Eduardo"
objeto5.tipo = "Pessoa"