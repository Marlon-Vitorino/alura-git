const idadeMinima = 18;
const idadeCliente = 19;

//if(idadeCliente >= idadeMinima) {
  //  console.log("cerveja")
//} else {
//    console.log("suco")
//}

            //condição                    //true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")
// ternario pois temos 3 operadores: >=, ? e :


const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`

console.log(pedido)