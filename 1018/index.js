const readline = require ('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("digite um valor inteiro: ", (valor)=>{
    let N = parseInt(valor);
    

    const notas = [100, 50, 20, 10, 5, 2, 1];
    console.log(N);

    for(i=0; i < notas.length; i++){
        const nota = notas[i];
        const quantidadeNotas = Math.floor(N/nota);
        console.log(`${quantidadeNotas} nota(s) de R$ ${nota},00`);
        N -= quantidadeNotas * nota;
    }

  rl.close();  
});