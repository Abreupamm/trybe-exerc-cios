const a = 10;
const b = 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


const valor1 = 30;
const valor2 = 6;

if (valor1>valor2){
    console.log(valor1);
} else{
    console.log(valor2)
}

const valorA = 100;
const valorB = 400;
const valorC = 500;

if (valorC<valorA>valorB){
    console.log(valorA);
} if (valorA<valorB>valorC){
    console.log(valorB);
} else{
    console.log(valorC);
}

const teste = -3;

if (teste > 0){
    console.log("POSITIVE");
} if (teste < 0){
    console.log("NEGATIVE");
} else {
    console.log("ZERO");
}

const angulo1 = 50;
const angulo2 = 100;
const angulo3 = -5;
const soma = angulo1 + angulo2 + angulo3;
const resultado = "Erro";
if (soma == 180){
    console.log("True");
} if (soma >= 181){
    console.log("False");
} else {
    console.log(resultado);
}