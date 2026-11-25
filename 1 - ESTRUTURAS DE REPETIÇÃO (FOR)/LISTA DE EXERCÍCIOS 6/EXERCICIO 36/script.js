let consumo = 0;
let somaConsumo = 0;
for (let leitura = 1; leitura <= 5; leitura++){
    consumo = +prompt("Informe a leitura do " + leitura + " dia: ");
    somaConsumo += consumo;
}
let mediaConsumo = somaConsumo/5;
alert("Média de consumo: " + mediaConsumo.toFixed(2));