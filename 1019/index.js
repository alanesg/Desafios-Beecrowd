const readline = require('readline')
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})
rl.question("Olá, digite o tempo em segundos: ", (hora) => {
    let N = parseInt(hora);

    //horas
    let horas = Math.floor(N / 3600); //(math.floor é para garantir valores inteiros sem casas decimais)

    //minutos
    let minutos = Math.floor((N % 3600) / 60);

    // segundos
    let segundos = (N % 60);

    //imprimir no formato desejado
    console.log(`${horas}:${minutos}:${segundos}`);

    rl.close();
});