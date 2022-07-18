// Funções Arrow são uma forma simplificada de definir uma função, além disso ela definem um this que se comporta sempre da mesma forma.

let soma = (a, b) =>{
    return a + b
}

soma = (a, b) => a + b // Forma simplificada de escrever, nesse caso o retorno é implícito

let frase = () => "Hello Wolrd"
frase = _ => "Olá Mundo!" // Podemos abstrair o parâmetro

console.log(soma(2, 2))
console.log(frase())

// O this não varia quando definido por uma função arrow
function Pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa