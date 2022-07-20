import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo",10000,232362722);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo",5000,2232334355);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Lais",243434657,"456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente,"123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente,"456");
console.log(gerenteEstaLogado,diretorEstaLogado,clienteEstaLogado);


//import {ContaCorrente} from "./Conta/ContaCorrente.js";
//import {ContaPoupanca} from "./Conta/ContaPoupanca.js";
//import { ContaSalario } from "./Conta/ContaSalario.js";
//
//const cliente1 = new Cliente("Ricardo",6276327632);
//
//const contaCorrenteRicardo = new ContaCorrente(cliente1,1001);
//const contaPoupanca = new ContaPoupanca(50,cliente1,1001);
//const contaSalario = new ContaSalario(cliente1);
//contaSalario.depositar(100);
//contaSalario.sacar(10);
//
//
//console.log(contaSalario);

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