//Var possui dois tipos de escopo: Escopo global e escopo de função.

//Global
var numero = 1

{
    var numero = 2 //Global mesmo estando em um bloco
    console.log(numero)
    
}

//Escopo de Função
function teste(){
    var testei = "Escopo de Função"
    console.log(numero)
    console.log(testei)
}
teste()
//Em resumo uma variável de tipo var será ou visível pra todos, ou visível apenas dentro de uma função.

//Já uma variável do tipo let possui escopo global, escopo de bloco e escopo de função
let numero1 = 34

{
    let numero1 = 80
    console.log("Dentro:",numero1)
}
console.log("Fora:",numero1)
