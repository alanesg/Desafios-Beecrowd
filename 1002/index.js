// Importando o módulo que lê as entradas do usuário
const readline = require('readline');

// Cria o objeto que vai ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1º Imprime o texto digitado, 2º lê a entrada do usuário
rl.question('Digite o primeiro valor: ', (valorEntradaRaio) => {

    var n = 3.14159
    var r = parseFloat(valorEntradaRaio)
    var formula = (n * Math.pow(r , 2))

    console.log ("A = " + formula.toFixed(4))
        // Encerra a execução do programa
        rl.close()
    
})