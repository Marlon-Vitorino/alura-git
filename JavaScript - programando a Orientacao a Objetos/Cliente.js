//toda vez que eu criar um arquivo com letra maiusculo, estou criando uma classe

export class Cliente {
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome,cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
}

//A inicialização de atributos é a principal responsabilidade do construtor.
