// A melhor forma de exportar um módulo é o definindo dentro do module.exports

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(module.exports)

// Para redefinir o que se deseja exportar, só é possível usando o module.exports que criará um novo objeto

module.exports = {
    d: 4
}