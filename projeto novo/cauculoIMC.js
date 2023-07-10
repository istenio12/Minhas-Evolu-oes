//importação do modulo readLine
const readline = require('readline');

function calcularIMC(peso, altura) {
    var IMC = peso / (altura * altura);
    return IMC.toFixed(2);
}
//criando interface da readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//usado para fazer perguntas ao uduário
rl.question("Digite o seu peso (em Kg): ", function (peso) {
    rl.question("Digite sua altura (em metros): ", function (altura) {

        //Utilização das respostas do usuário para calcular o IMC
        var resultadoIMC = calcularIMC(parseFloat(peso), parseFloat(altura));
        
        //Exibe o resultado no console
        console.log("Seu IMC é: " + resultadoIMC);

        //fechar interface
        rl.close();
    });
});