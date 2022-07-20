// var

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento;
//console.log(area)
//var area;

//a Var não é muito recomendado utilizar hoje em dia, pois é muito solta.

//let forma = "retangulo";
//let altura = 5;
//let comprimento = 7;
//let area;

//if(forma === "retangulo") {
//    area = altura * comprimento;
//} else {
//    area = (altura * comprimento) / 2;
//}

//console.log(area)

//a Let permite trocar os valores dela, porem, sempre temos que declarar o valor antes de se utilizar.

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area;

if(forma === "quadrado") {
   area = altura * comprimento; 
} else {
    area = (altura * comprimento) / 2;
}

console.log(area)

//a Const é um valor fixo, uma vez declarado, fica preso nela e tambem tem que ser declarado antes de se utilizar.