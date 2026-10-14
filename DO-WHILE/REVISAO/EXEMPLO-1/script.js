// Faça um programa que receba um número qualquer. O resultado deverá ser a tabuada de 1 até 10 no console.log.
// - Controle de entrada com do while;
// - Faça apenas prompt e não + prompt;
// - Use IsNan;
// - Aceitar apenas números positivos.
// Após validação, converta para inteiro.
// Apresente a tabuada no console.

let numero;
let n = 0;
let contador = 0;

do {
    numero = prompt("Insira um número:");
    if(isNaN(numero) || (numero <= 0)) {
        alert("Valor inválido!");
    }
} while (isNaN(numero) || (numero <= 0));

numero = parseInt(numero);

// Apresentação da tabuada
do {
    console.log(numero + " x " + contador + " = " + numero * contador);
    contador++;
} while (contador <= 10);