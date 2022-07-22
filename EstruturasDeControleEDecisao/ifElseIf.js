// Podemos encadear vários ifs, cada um para uma condição

let imprimeResultado = function(resultado){
    
    if(resultado >= 7){
        console.log("Aprovado")
    } else if(resultado < 7 && resultado >= 5){
        console.log("Recuperação")
    } else if(resultado < 5 && resultado >=3){
        console.log("Prova Final")
    }  else {
        console.log("Reprovado")
    }
}

imprimeResultado(10)
imprimeResultado(6)
imprimeResultado(4)
imprimeResultado(2)