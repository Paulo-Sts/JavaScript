// Não existem atributos privados em Javascript, porém a convenção é usar os getters e setters para manipular o objeto
// É também convenção usar um underline antes do nome do atributo para informar que este não deve ser acessado diretamente

const sequencia = {
    _valor: 1,
    get valor(){
        return this._valor
    },
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 2
console.log(sequencia.valor)