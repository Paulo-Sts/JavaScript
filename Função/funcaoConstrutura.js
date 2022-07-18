// No Javascript podemos definir a estrutura de objetos(sua classe) através de funções

function Carro(velocidadeMaxima = 180, acelaracao = 5){

    // Atributo privado
    let velocidadeAtual = 0

    // Método público acelerar
    this.acelerar = function(){
        if(velocidadeAtual + acelaracao <= velocidadeMaxima){
            velocidadeAtual += acelaracao
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método ver velocidade
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

// Criando objeto com parâmetros padrão
const fox = new Carro

fox.acelerar()
console.log(fox.getVelocidadeAtual())
fox.acelerar()
fox.acelerar()
fox.acelerar()
fox.acelerar()
console.log(fox.getVelocidadeAtual())

// Criando novo objeto com outros parâmetros
const audiR8 = new Carro(400, 100)
audiR8.acelerar()
audiR8.acelerar()
audiR8.acelerar()
console.log(audiR8.getVelocidadeAtual())