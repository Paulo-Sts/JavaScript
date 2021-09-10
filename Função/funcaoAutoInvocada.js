//É uma função que é usada dentro da sua própria definição, é útil para fugir do escopo global padrão
(function(){
    console.log("Essa função é chamada na sua própria definição")
    console.log("Tudo definido dentro dela limitará o escopo ao escopo local")
})()