//Uma outra forma de definir objetos é usando a notação de class
//Class em javascript são convertidos em funções
class Lancamento {
    constructor(nome = "qualquer", valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(... lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento("Salario", 45000)
const ContaDeLuz = new Lancamento("luz", -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, ContaDeLuz)
console.log(contas.sumario())