// Em javascript tanto parâmetros como retornos são opçionais em uma função

function imc(peso, altura){
    let imc = peso / (altura ** 2)
    if(imc > 25){
        console.log("Você está acima do Peso!!!")
    } else{
        return imc
    }
}

console.log(imc(50, 1.5))
console.log(imc(100, 1.9, 21, 2)) // Js ignora os parâmetros a mais
console.log(imc(200)) // Quando faltam parâmetros o resultado é um NaN
console.log(imc(67, 1.65))