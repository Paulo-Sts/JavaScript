/*
O sistema de módulos do Node é usado para estruturar o desenvolvimento de código backend seguindo uma arquitetura
mais limpa e organizada, sendo cada arquivo um módulo com seus recursos que podem ser acessados por outros módulos
de acordo com sua função
*/

// Criando um objeto dinâmicamente

this.mensagemInicial = "Oi, seja bem vindo!"
exports.segundaMensagem = "Até logo!"

// Atribuindo um novo objeto ao module.exports
module.exports = {
    moto: {
        modelo: "Honda",
        cor: "Preta",
        ano: 2018
    },
    liga(){
        return console.log("Moto ligada")
    }
}