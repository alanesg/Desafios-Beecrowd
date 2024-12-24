const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
rl.question("Digite um valor: ", (valor)=>{
let N = parseFloat(valor)

//notas consideradas
const notas =[100, 50, 20, 10, 5, 2]
//moedas consideradas
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01]

// para exibir as notas
console.log("nota(s): ");
let valorNotas = Math.floor(N); 
for(let i = 0; i < notas.length; i++) { //condição FOR
    let qtdNotas = Math.floor(valorNotas / notas[i]);
    valorNotas %= notas[i]; //atualiza o valor restante
    console.log(`${qtdNotas} nota(s) de R$ ${notas[i].toFixed(2)}`);
}

//para exibir as moedas
console.log("moeda(s): ");
let  valorMoedas = N.toFixed(2).split('.'[1]); //converte para o formato moeda
for (let i = 0; i < moedas.length; i++) {
    let qtdMoedas = Math.floor(valorMoedas / (moedas[i]*100)); //multiplica por 100 para lidar com centavos
    valorMoedas %= (moedas[i]* 100); //atualiza o valor restante
    console.log(`${qtdMoedas} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
}

rl.close();
})