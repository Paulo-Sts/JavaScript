const express = require('express')
const funcaoTeste = require('./exemploMiddleware')
const bodyParser = require('body-parser')

//instanciando o express
const app = express() //Por meio da aplicação instanciada é definido a construção da Api

/*app.use('/teste',(req, res, next) => { //O next é a implementação do padrão middleware que integra a chamada de métodos de acordo com a sua responsabilidade
    console.log('Teste1')
    next()
})*/

//Usando um middleware
//app.use(funcaoTeste)

app.get('/cliente/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado`)
})

app.get('/teste',(req, res, next) => {
    //Tipos de Resposta
   //res.send("Bem Vindo!") //Html

    //res.json({atributo: "valor"}) //Json

    /*res.json([ //Array de objetos Json
        {atributo1: "valor1"},
        {atributo2: "valor2"},
        {atributo3: "valor3"}
    ])*/

    res.json({ //Dados sobre a requisição
        data: [
            {atributo1: "valor1"},
            {atributo2: "valor2"},
            {atributo3: "valor3"}
        ],
        count: "valor",
        skip: "valor",
        limit: "valor",
        status: "valor"
    })
    next()
})

app.use('/teste',(req, res) => {
    console.log('Teste2')
   
})


//Define a porta da aplicação
app.listen(3000, () => {
    console.log("Porta 3000 Executando!")
})