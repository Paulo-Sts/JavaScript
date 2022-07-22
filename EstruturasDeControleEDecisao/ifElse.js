// O If Else executa um bloco de código se uma condição for atendida, ou outro bloco se a condição não for atendida.

let resultadoEscola = function (media){
    if(media >= 7){
        console.log("Média: " + media + " Situação: Aprovado")
    } else{
        console.log("Média: " + media + " Situação: Reprovado")
    }
}

resultadoEscola(10)
resultadoEscola(2)

//OBS: Assim como no if para bloco de sentença única é possível omitir as chaves.

let idade = 2

if(idade >= 18) console.log("De Maior!")
else console.log("De menor!")
