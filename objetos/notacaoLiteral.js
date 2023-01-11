// O EC2015 trouxe novas funcionalidades que simplificam a duplicidade 
const numero1 = "numero1"
const numero2 = "numero2"
const numero3 = "numero3"

// Forma antiga
const objeto1 = {numero1: "numero1", numero2: "numero2", numero3:"numero3"}
console.log(objeto1)

// Forma simplificada
const objeto2 = {numero1, numero2, numero3}
console.log(objeto2)

// Outras adições do EC2015 que simplificam a definição de atributos de um objeto

const nomeAtrib = "Peso"
const valorAtrib = 68.5

// Forma antiga
const objeto3 = {}
objeto3[nomeAtrib] = valorAtrib
console.log(objeto3)

// Forma simplificada
const objeto4 = {[nomeAtrib]: valorAtrib}
console.log(objeto3)

// Forma antiga de definir funções
const objeto5 = {
    funcao: function(){

    }
}

// Forma simplificada de definir funções
const objeto6 = {
    funcao(){

    }

}