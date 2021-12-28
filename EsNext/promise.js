//O promise é utilizado para executar uma operação de forma assíncrona
//A forma comum de funcionamento da promise é ela ser executada ou não, por exemplo através de um callback

//Exemplo
function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(3, "Funciona")
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))