// Faça um programa que receba um número qualquer. O resultado deverá ser a tabuada de 1 até 10 no console.log.
// - Controle de entrada com do while;
// - Faça apenas prompt e não + prompt;
// - Use IsNan;
// - Aceitar apenas números positivos.
// Após validação, converta para inteiro.
// Apresente a tabuada no console.

let numero;
let contador = 1;

while (isNaN(numero) || numero <= 0) {
    numero = prompt("Insira um número:");
    if(isNaN(numero) || (numero <= 0)) {
        alert("Valor inválido!");
    }
}

numero = parseInt(numero);

// Apresentação da tabuada
while (contador <= 10) {
    console.log(numero + " x " + contador + " = " + numero * contador);
    contador++;
}