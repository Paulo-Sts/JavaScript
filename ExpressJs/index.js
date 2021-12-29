const express = require('express')

//instanciando o express
const app = express() //Por meio da aplicação instanciada é definido a construção da Api

//Define a porta da aplicação
app.listen(3000, () => {
    console.log("Porta 3000 Executando!")
})