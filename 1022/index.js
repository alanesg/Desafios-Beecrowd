//Leia 4 valores inteiros A, B, C e D. A seguir, 
// se B for maior do que C e se D for maior do que A, 
// e a soma de C com D for maior que a soma de A e B e se C e D,
//  ambos, forem positivos e se a variável A for par escrever a
//  mensagem "Valores aceitos", senão escrever "Valores nao aceitos".


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//definindo valores para os números inteiros
rl.question("Digite um número para A: ", (valorA) => {
    let a = parseInt(valorA);

    rl.question("Digite um número para B: ", (valorB) => {
        let b = parseInt(valorB);

        rl.question("Digite um número para C: ", (valorC) => {
            let c = parseInt(valorC);
           
            rl.question("Digite um número para D: ", (valorD) => {
                let d = parseInt(valorD);

                var soma1 = c + d;
                var soma2 = a + b;
                //utilizando condicionais para o cálculo
                if (b > c && d > a && soma1 > soma2 && c > 0 && d > 0 && a % 2 === 0) {
                    console.log("Valores aceitos.")
                }
                else{
                    console.log ("Valores não aceitos.")
                }
                //fechamento
                rl.close();
            })
        })
    })

})