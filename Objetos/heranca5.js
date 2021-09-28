//Por meio do prototype, podemos adicionar novos métodos em diferentes tipos que são functions

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Adicionando método que inverte os caracteres
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log("Exemplo 1".reverse())
console.log("tenet".reverse())