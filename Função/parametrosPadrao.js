// Existem algumas formas de definir parâmetros padrão, na versão Ecma2015 foi criada a versão mais comum de se definir parâmetros padrão

// Forma padrão
function soma1(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma1(), soma1(5), soma1(10, 10, 10))

// Outras formas
function soma2(a, b, c){ // Usando o operador ou para atribuir o valor padrão sempre que o primeiro parâmetro da expressão for falso
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(5), soma1(10, 10, 10))

function soma3(){
    a = a !== undefined ? a: 1
    b = 1 in arguments ? b:1
    c = isNaN(c) ? 1: c
}

console.log(soma1(), soma1(5), soma1(10, 10, 10))