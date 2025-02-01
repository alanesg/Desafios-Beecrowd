const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite três valores de ponto flutuante (double) A, B, C separados por espaço: ', 
    (input) => {const [A, B, C] = input.split(' ').map(Number);
     //o input.split é um método em javascript,
    //  que divide uma string em um array de substrings,
    //separados por um caractere especificado ["A", "B", "C"]
     
    // o A === 0 verifica se A é zero.
    // o B**2-4*A*C < 0 verifica se o discriminante da equação é negativo.
    //condição IF e ELSE
    if (A === 0 || B**2 -4*A*C < 0) {
        console.log('Impossível calcular.');
    } else {
        const R1 = (-B + Math.sqrt(B**2 -4*A*C)) / (2*A);
        const R2 = (-B - Math.sqrt(B**2 -4*A*C)) / (2*A);

        console.log(`R1 = ${R1.toFixed(5)}`);
            console.log (`R2 = ${R2.toFixed(5)}`);
    }
// fechamento...
            rl.close();
        });
