const calcularFatorial = (numero) => {
    if (numero < 0){
    return "o numero precisa ser positivo";
    }
let fatorial = 1;

for (let i = numero; i >= 1; i--) {
    fatorial *= i;
}

return fatorial;
};

console.log(calcularFatorial(6));
console.log(calcularFatorial(1));
console.log(calcularFatorial(20));