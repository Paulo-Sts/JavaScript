//Em js é possível uma função receber parâmetros de forma variável
//O arguments é uma propriedade interna que toda função tem, sendo um array que armazena parâmetros que a função recebe
//Usando um for in podemos ter acesso a esses parâmentros e manipular de forma variável os parâmetros que uma função pode ter

function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i] //O for percorre o array arguments e o soma a variável soma
    }
    return console.log(soma)
}

soma()
soma(1, 10, 25)
soma("A", "Esquerda")
