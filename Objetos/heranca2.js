// Exemplo cadeia de protótipos
const avo = {
    attr1: "A"
}

const pai = {
    __proto__:avo, attr2: "B" // Com o __proto__: objeto pai definimos de qual objeto é herdado
}

const filho = {
    __proto__:pai, attr3: "C"
}

console.log(filho.attr1, filho.attr2, filho.attr3)

// Método para definir relação de herança entre objetos
const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual +=delta
        } else{
            this.velAtual = this.velMax
        }
    },status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

// Método que estabelece relação entre objetos
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(120)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())