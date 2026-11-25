let peso = 0;
let maiorPeso = 0;
let menorPeso = 0;
for(let i = 1; i <= 6; i++){
    peso = prompt("Informe o peso do " + i + "° lote: ");
    if(1 == 1) {
        maiorPeso = peso;
        menorPeso = peso;
    }
    if(peso > maiorPeso) {
        maiorPeso = peso;
    }
    if(peso < menorPeso) {
        menorPeso = peso;
    }
}
alert("O maior peso informado foi " + maiorPeso);
alert("O menor peso informado foi " + menorPeso);