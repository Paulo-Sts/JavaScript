const fs = require('fs')

const pessoa = {
    nome: 'Paulo',
    idade: 23,
    profissao: "Programador"
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(pessoa), erro => {
    console.log(erro || 'Arquivo salvo!')
})