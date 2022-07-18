// O switch define a execução de um bloco de código para um determinado valor ou valores.

let resultadoEscola = function(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log("Melhor da Turma")
            break
        case 9: case 8: case 7:
            console.log("Aprovado por média")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: 
            console.log("Prova Final")
            break
        case 2: case 1: case 0:
            console.log("Reprovado!")
            break
        default:
            console.log("Nota Inválida")
    }
}

resultadoEscola(10)
resultadoEscola(7)
resultadoEscola(4.5)
resultadoEscola(3.9)
resultadoEscola(1.2)
resultadoEscola(12)