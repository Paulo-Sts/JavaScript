function operacoes(numero1, numero2){
    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let multiplicacao = numero1 * numero2
    let divisao = numero1 / numero2
    return console.log(`Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao}
    `)
}

operacoes(2, 2)