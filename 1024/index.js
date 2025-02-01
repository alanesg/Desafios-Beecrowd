//readline ler a entrada do usuário;
const readline = require('readline');

//criando a interface da leitura: 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ler o valor:
rl.question('Digite um valor: ', (numero) => {
numero = parseFloat(numero);

//verificar em qual dos intervalos esse valor se encontra:

if (numero >= 0 && numero <= 25){
        console.log('Intervalo [0,25]');
    } else if (numero > 25 && numero <= 50){
        console.log('Intervalo [25,50]');
        }else if (numero > 50 && numero <= 75){
        console.log('Intervalo [50,75]');
    }else if (numero > 75  && numero <= 100){
        console.log('Intervalo [75,100]');
    }else {
        console.log('Fora de intervalo')
}
    
rl.close();
})

  