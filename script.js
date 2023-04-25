// solicita ao usuário que insira dois números
let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

// calcula as operações
let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;
let ehPar = (soma % 2 === 0) ? true : false;
let saoIguais = num1 === num2;

// exibe os resultados em alertas
alert("Soma: " + soma);
alert("Subtração: " + subtracao);
alert("Multiplicação: " + multiplicacao);
alert("Divisão: " + divisao);
alert("Resto da divisão: " + resto);
alert("A soma é " + (ehPar ? "par" : "ímpar"));
alert("Os números são " + (saoIguais ? "iguais" : "diferentes"));
