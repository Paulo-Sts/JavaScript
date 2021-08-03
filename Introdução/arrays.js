//O Array é um estrutura que armazena vários dados, podendo esses serem de diferentes tipos
//O Array também é de tamanho dinâmico, sendo assim podemos adicionar ou remover dados 
//O Array ordena os dados por meio de um indice que se inicia em zero

const valoresExemplo = []
const valoresExemplo2 = [1.2, "Oi", true, 5]

valoresExemplo[0] = 10
console.log(valoresExemplo)

//Algumas funções do Array

console.log(valoresExemplo2.length) //Retorna a quantidade de dados armazenados no Array

delete valoresExemplo2[3] //Apaga dado
console.log(valoresExemplo2)

console.log(valoresExemplo2.pop()) //Remove o último item e o imprime