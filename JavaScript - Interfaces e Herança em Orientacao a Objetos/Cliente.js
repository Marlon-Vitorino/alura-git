//toda vez que eu criar um arquivo com letra maiusculo, estou criando uma classe

export class Cliente {
    get cpf() {
        return this._cpf;
    }

    constructor(nome,cpf,senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }

    autenticar(){
        return true;
    }
    
}

//A inicialização de atributos é a principal responsabilidade do construtor.
