let fatorial = +prompt('Digite um número:');
let resultado = 1

for (let counter = 1; counter <= fatorial; counter = counter + 1) {
    resultado = resultado * counter;
}

console.log(resultado);