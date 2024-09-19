 // 01
let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
frutas.shift();
console.log(frutas);

function verificarFruta(banana) {
if (frutas.includes(banana)) {
    return 'fruta encontrada';
} else {
    return 'fruta não encontrada';
}
}
verificarFruta();
console.log(verificarFruta('banana'));

//   02
// function calcular(a, b, operacao ) {
//     if (operacao == 'soma'){
//         resultado = a + b;
//     } 
//     else if (operacao == 'divisao'){
//         resultado = a / b;
//     }
//     return resultado;
// }
// console.log(calcular(10,2,'soma'));
// console.log(calcular(10,2,'divisao'));

//   03    !!!CORREÇÃO!!!
// let numeros = [1, 2, 3, 4, 5]
// let numerosAumentados = []
// for (i = 5; i <= 5; i++) {
//     console.log(numeros);
//     console.log(i);
// }

//   04
// function classificarNotas(notas) {
//     switch(true) {
//         case (notas > 7):
//             return 'aprovado';
//         case (notas < 7):
//             return 'reprovado';
//         }
// }
// console.log(classificarNotas(8));
// console.log(classificarNotas(5));

//   05
// let numeros = [5, 10, 15, 20];
// function verificarNumero(numero) {
//     if (numero >= 20){
//         return 'maior que 20';
//     } else if (numero <= 10){
//         return 'menor que 10';
//     } else if (numero >= 10 || numero <= 20){
//         return 'entre 10 e 20';
//     }
// }
// console.log(verificarNumero(25));
// console.log(verificarNumero(5));
// console.log(verificarNumero(15));

//    erro da 05
// function verificarNumero(numero) {        
//     for (let i = 0; i < verificarNumero.length; i++) {
//         if (verificarNumero[i] >= 20) {
//             return 'maior que 20';
//         } else if (verificarNumero[i] <= 10) {
//             return 'menor que 10';
//         } else if (verificarNumero[i] >= 10 || verificarNumero[i] <= 20) {
//             return 'entre 10 e 20';
//         }
        
// }
// }
// let numeros = [5, 10, 15, 20];
// console.log(verificarNumero(numeros));
// console.log(verificarNumero(25));
// console.log(verificarNumero(5));
// console.log(verificarNumero(15));

//   06   !!!PRA CORREÇÃO!!!
// let idade = 47;
// if (idade >= 18){
//     return 'adulto';
// } else if (idade < 65){
//     return 'n é adulto';
// }
// console.log('voce'+(idade ? 'adulto' : 'n é adulto'));

//   07 

//   08
// let tarefas = ['estudar', 'limpar', 'comprar'];
// tarefas.splice(2,3,'exercitar')
// console.log(tarefas);
// console.log(tarefas.length);

//   09 

//   10

//   11
// function compararSoma(num1, num2) {         // ERRADO
//     const questao = parent(prompt('digite dois numeros'))
//     let resultado = num1 + num2;
//     if (resultado > 20) {
//         alert ('soma maior que 20')
//     }
//     else if (resultado < 20) {
//         alert ('menor que 20');
//     }
// }
// compararSoma();
// let numero1 = parseInt(prompt('digite o primeiro numero'));
// let numero2 = parseInt(prompt('digite o seg num'));
// function compararSoma(num1, num2) {
//     const soma = num1 + num2;
//     if (soma > 20) {
//         return 'maior 20';
//     } else {
//         return 'menor 20';
//     }
// }
// const mensagem = compararSoma(numero1, numero2);
// alert(mensagem);

//   12
