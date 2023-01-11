const fs = require('fs')
const caminho = __dirname + '/arquivos.json'

// Leitura sincrona
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// Leitura Assíncrona
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// Leitura de Json
const config = require('./arquivos.json')
console.log(config.db)

// Leitura de diretorio
fs.readdir(__dirname, (erro, arquivos) => {
    console.log("Conteúdo da pasta...")
    console.log(arquivos)
})