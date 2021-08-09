//São usados para interromper a sequência de um bloco de código o finalizando ou indo para outro
//O break interfere em estruturas de repetição como while, for e switch já o continue é usado no while e no for
//OBS: Eles intererem no bloco mais próximo de que estiverem

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Aciona o if interropendo a impressão dos valores que estão associados ao bloco for, mesmo não tendo finalizado
for(let x in numeros){
    if(x == 6){
        console.log("Interrompe")
        break
    }
    console.log(`${x} = ${numeros[x]}`)
}

//Pula o indice/valor para quando a condição if for verdadeira e continua a executar as instruções do bloco for
for(let y in numeros){
    if(y == 6){
        console.log("Pula")
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}