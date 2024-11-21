// Importando o módulo que lê as entradas do usuário
const readline = require('readline');

// Cria o objeto que vai ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1º Imprime o texto digitado, 2º lê a entrada do usuário
rl.question('Digite o primeiro valor: ', (entradaUsuarioUm) => {

    var a = parseInt(entradaUsuarioUm)

    rl.question('Digite o segundo valor: ', (entradaUsuarioDois) => {

        var b = parseInt(entradaUsuarioDois)
        var soma = (a + b)
        console.log ("X = " + (a+b))
        // Encerra a execução do programa
        rl.close()
    })
})