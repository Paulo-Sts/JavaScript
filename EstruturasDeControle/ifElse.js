let resultadoEscola = function (media){
    if(media >= 7){
        console.log("Média: " + media + " Situação: Aprovado")
    } else{
        console.log("Média: " + media + " Situação: Reprovado")
    }
}

//OBS: Assim como no if para bloco de sentença única é possível omitir as chaves.

resultadoEscola(10)
resultadoEscola(2)