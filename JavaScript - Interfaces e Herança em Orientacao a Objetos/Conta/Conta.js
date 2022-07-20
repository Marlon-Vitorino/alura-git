//Classe abstrata:são pensadas de forma que elas apenas possam ser herdadas por outras.
//nos ajudam a criar abstrações no código e a compartilhar código entre outras classes.
export class Conta {
    constructor(saldoInicial,cliente,agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");
        }
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;        
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente
    }    

    get saldo() {
        return this._saldo;
    }

    //metodo abstrato: devem ser sobrescritos pelas classes filhas.
    sacar(valor) {
         throw new Error("O metodo Sacar da conta é abstrato")      
    }

    _sacar(valor,taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        //if(valor <= 0) {
        //    return;
        //}
        //this._saldo += valor;
        //ou abaixo
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor,conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

//Usando assessores do tipo set podemos alterar a regra de como um atributo pode ou não ser modificado sem precisar alterar isso em diversos pontos do código
//Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura
//get sempre ira te retornar um valor e não alterá-lo