//Funções em JavaScript são cidadões de primeira classe, ou seja, são elementos fundamentais de de alto valor/relevância

//Definir função de forma literal
function funcao1(){} //Funções podem ter ou não parâmentros e ter ou não retorno, tecnicamente uma função sem retorno retorna undefined

//Função em uma variável
let funcao2 = function (){
   return console.log(" Eu sou uma função anônima")
}

//Função pode ser armazenada em um array
const arrayComFuncao = [function(a, b){ return a * b}, funcao1(), funcao2()]

console.log(arrayComFuncao[0](5,10))

//Função pode ser armazenada em atributos de um objeto
let objeto = {}
objeto.fala = function(){return "Oii"}
console.log(objeto.fala())

//Uma função pode ser o parâmetro de outra função
function funcao3(funcParametro){
    funcParametro()
}

funcao3(function teste(){console.log("Teste")})

//Uma função pode retornar uma função
function multiplica(n1, n2){
    return function (n3){
        console.log(n1 * n2 * n3)
    }
}

//Formas de chamar
multiplica(2, 2)(2) //Informa os valores 
let juntaValores = multiplica(2, 2) //Agrupa os valores e fornece a função interna seu parâmetro
juntaValores(2)