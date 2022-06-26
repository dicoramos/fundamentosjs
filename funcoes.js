// let x = "";
// console.log(x);
// x = "oi"; //não exibe nada, pois o valor foi atribuido depois

// DECLARAÇÃO DE FUNÇÃO

// 1) declara a função
                      //2 -> valor de soma()
function imprimeTexto(texto) {
  console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto(soma());//chama uma função dentro de outra função
imprimeTexto("oi");
imprimeTexto("outro texto");

// três formas de escrever funções

function soma(){
  //outros códigos
  //vários console.log()
  return 2 + 2;//sempre tem que ser a ultima linha da função
}

// console.log(soma())