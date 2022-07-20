const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   //const objPersonagem2 = objPersonagem
   const objPersonagem2 = Object.create(objPersonagem)
   //O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf, o Cinzento
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento   


let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100