// Exemplo Padrão Middleware

/*
As funcionalidades são executadas em blocos individuais em que cada 
função executa sua tarefa e tendo sucesso chama uma função que vai iniciar
o próximo passo, dessa forma é retirado o acoplamento entre as funções, pois
cada uma executa sua responsabilidade de forma independente
*/

const passo1 = (ctx, next) =>{
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const executa = (ctx, ...middlewares) => {
    const executaPasso = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => executaPasso(indice + 1))
    }
    executaPasso(0)
}

const ctx = {}
executa(ctx, passo1, passo2, passo3)
console.log(ctx)