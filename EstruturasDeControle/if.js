// O If executa um bloco de código se uma condição for atendida.

/* 
if(parâmetro){
    senteças
}
*/

function resultado(media){
    if(media >= 7){
        console.log("Aprovado!!!")
    }
}

resultado(8)

// O If também permite para blocos de sentença única omitir as chaves ({})

let idade = 18
if(idade) console.log("De maior")