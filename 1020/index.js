const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question ("Digite sua idade em dias: ",(dias)=>{
let N = parseInt(dias);

//cálculo para Ano
let ano = Math.floor(N/365);

//cálculo para mês
let mes = Math.floor((N % 365) / 30);

//cálculo para o número de dias restantes;
let diasRestantes = ((N % 365) % 30);

console.log(`${ano} ano(s),`);
console.log(`${mes} mês(es),`);
console.log(`${diasRestantes} dia(s) .`);

rl.close();
});