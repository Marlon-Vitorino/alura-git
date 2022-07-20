//para criar o arquivo package.json precisa digitar no terminal npm init:
//package name: de um nome.
//description: colocar descrição
//entry point: é a pasta onde vai executar
//author:
//adicionar depois dentro do arquivo package.json: "type": "module"

//escrever o script abaixo dentro do arquivo package.json.
//E ao invés de escrever esse comando podemos chamar o script com o comando npm start. Dessa forma não precisamos lembrar de todo o comando sempre que vamos executar o programa.

//"scripts": {
//    "start": "node index.js"
//}

import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",6276327632);
const cliente2 = new Cliente("Alice",236273613);

const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente(102,cliente2);

contaCorrenteRicardo.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);