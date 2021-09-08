//Function declaration
function mensagem(){
    console.log("Olá! Sou uma Função!")  //Uma função declarada pode ser chamada antes de sua declaração, nas outras formas ocorre um erro
}

//Function expression
const mensagem = function(){
    console.log("Olá! Eu também sou uma Função!")
}

//Named function express
const outraMensagem = function outraMensagem(){
    console.log("Olá! Eu também sou uma função também!")
}