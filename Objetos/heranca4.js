//Objetos criados a partir de uma função construtora apontam para o mesmo prototype (A função.prototype)
function MeuObjeto(){}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)

//Podemos definir atributos de uma função construtora que poderam ser acessados pelos objetos criados a partir dela
MeuObjeto.prototype.nome = "Pai"
MeuObjeto.prototype.falar = function(){
    console.log("Olá!")
}

console.log(obj1.falar())