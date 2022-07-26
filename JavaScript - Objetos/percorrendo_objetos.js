const paciente = {
    nome: "James T.",
    idade:30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao:"comandante",
    peso:80.1,
    altura:1.80,
    calcularIMC:function(){
          return (this.peso/(Math.pow(this.altura,2)))
    },
    nomeCompleto:function(){
      console.log(this.nome)
    }
   }

   let dados = "";
for (let info in paciente) {
if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
  continue
} else {
 dados += `${info} ==> ${paciente[info]}
  `}
};

//O for...in permite iterar sobre as propriedades de um objeto, e neste loop temos a flexibilidade de percorrer o objeto e executar uma série de comparações. Uma delas é usar o typeof e verificar o tipo da propriedade.
//O loop definido no for...in irá retornar para a variável info o nome da chave do objeto, ou seja, o nome da propriedade do objeto.