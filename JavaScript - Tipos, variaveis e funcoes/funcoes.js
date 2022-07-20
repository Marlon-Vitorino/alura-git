//let x = "";
//console.log(x)
//x = "oi";

// DECLARAÇÃO DE FUNCÃO

// 1) declara a função
                     //string
function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("oi")
imprimeTexto(soma())// string se torna 4 -> valor de soma.

// tres formas de escrever funções

function soma() {
    return 2 + 2;// return sempre na ultima linha do bloco.
}

console.log(soma())