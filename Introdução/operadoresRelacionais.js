// Operadores relacionais, também são operadores binários e eles sempre retornam um resultado booleano: true ou false

/* 
OBS: Em JavaScript por ser uma linguagem fracamente tipada, a comparação pode ser feita em tipos distintos onde serão considerados
apenas os valores, à menos que se deseje comparar de forma estrita os tipos e valores, para isso usa-se o operador de igualdade triplo (===).
*/

console.log("1)Igual: ", 50 == "50", 50 == 50, "50" == "50" )
console.log("2)Igual estrito: ", 50 === "50", 50 === 50, "50" === "50")
console.log("3)Diferente de: ", "2" != 2)
console.log("4)Diferente Estrito: ", "2" !== 2)
console.log("5)Maior: ", 30 > 4)
console.log("6)Menor: ", 2 < 6)
console.log("7)Maior ou igual a: ", 3 >= 1)
console.log("8)Menor ou igual a: ", 100 <= 40)

console.log("9)Exemplo extra: ", undefined == null, undefined === null)


// Outros operadores relacionais

// in
// Retorna verdadeiro se a propriedade especificada existir no objeto especificado

let carro = {
    cor: "Azul"
}

console.log("cor" in carro) // A propriedade deve ser especificada em forma de string.

// instanceof
// Retorna verdadeiro se o objeto especificado for do tipo de objeto especificado

let novoArray = []
console.log(novoArray instanceof Array)
