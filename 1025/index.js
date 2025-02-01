//A tabela objeto foi colocada antes de tudo porque 
// ela é uma constante que precisa ser definida antes de ser usada no código.
//No JavaScript, as constantes e variáveis precisam ser declaradas antes 
// de serem usadas.
// Se tentarmos usar uma constante ou variável antes de declará-la, 
//o JavaScript irá lançar um erro.

const tabela = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
};

const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
})

rl.question('Digite o código e a quantidade do item escolhido ',(input) =>{
 const [codigo, quantidade] = input.split(' ').map(Number);

 if(tabela[codigo]) {
    const valor = tabela[codigo] * quantidade;
    console.log(`Total: R$ ${valor.toFixed(2)}`);
 }else {
    console.log ('Código inválido');
 }

 
rl.close();
});