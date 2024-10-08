//   Questão 01
// let numeros = [34, 7, 23, 32, 5, 62];
// numeros.push(9, 12);
// numeros.unshift(1);
// numeros.sort((a, b) => a - b);
// numeros.reverse();
// console.log(numeros);

//   Questão 02
// let saudacao = "Olá";
// let nome = "Mundo";
// let mensagem = saudacao.concat(nome);
// let mensagem2 = mensagem;
// let mensagemMaiusculo = mensagem.toUpperCase();
// let mensagemConc = mensagem.slice(3, 8);
// console.log(mensagem);
// console.log(mensagemMaiusculo);
// console.log(mensagemConc);

//   Questão 03
// let valores = [10, 25, 30, 45, 50, 60];
// let maior = valores.filter(valor => valor > 30);
// soma = 0
// for (let i = 0; i < maior.length; i++) {
//     soma += maior[i]
// };

// console.log(maior);
// console.log(soma);

//   Questão 04
// let numeros = [1, 2, 3, 4, 5];
// let dobro = numeros.map(function(multi) {
//     return multi * 2;
// });
// let soma = numeros.reduce(function(acumulador, numero) {
//     return acumulador + numero;
// }, 0);
// console.log(dobro);
// console.log(soma);

//   Questão 05
// let frase = "A programação é divertida e desafiadora.";
// let palavras = frase.split(" ");
// let palavrasMaiuscula = palavras.map(palavra => palavra.toUpperCase());
// let novaFrase = palavrasMaiuscula.join("-");
// console.log(frase.length);
// console.log(palavras);
// console.log(palavrasMaiuscula);
// console.log(novaFrase);

//   Questão 06
// let frutas = ["maçã", "banana", "laranja", "manga", "uva"];
// frutas.splice(2, 1, "abacaxi");
// let primeiraFruta = frutas.slice(0,3);
// let novaFruta = primeiraFruta.push("melancia");
//
// console.log(frutas);
// console.log(primeiraFruta);

//    Questão 07
// let nomes = ["Ana", "Carlos", "João", "Maria"];
// nomes.indexOf("Carlos")
// nomes.splice(2,1);
// nomes.unshift("Fernanda");
// nomes.push("Rafael");

// console.log(nomes);
// console.log(nomes.indexOf("Carlos"));

//   Questão 08
// ???????????????????????????????
// ???????????????????????????????
// ???????????????????????????????

//   Questão 09
// ???????????????????????????????
// ???????????????????????????????
// ???????????????????????????????

// let numerosAleatorios = [];
// for (let i = 0; i < 10; i++) {
//     numerosAleatorios.push(Math.floor(Math.random()) * 101);
// };
// let maiores50 = numerosAleatorios.filter(function(num) {
//     return num > 50;
// });
// let ordenadoDesc = maiores50.sort(function(a, b) {
//     return b - a;
// })

//  Questão 10
// let notas = [7.5, 8.0, 6.5, 9.0, 7.0];
// let media = notas.reduce((acc, nota) => acc + nota, 0);
// let status = media >= 7 ? "aprovado" : "reprovado";
// console.log("média:", status);

//   Questão 11 
// let cidade = "São Paulo";
// let clima = "ensolarado";
// let fala = `Hoje em ${cidade} está ${clima}`;

// let novoClima = "chuvoso";
// let novaFala = fala.replace(clima, novoClima );

// console.log(fala);
// console.log(novaFala);

//   Questão 12
// let texto = "javascript é incrivel";
// let palavras = texto.split(" ");
// let palavrasInvertida = palavras.reverse();
// let resultado = palavrasInvertida.map(palavra =>
//     palavra[0].toUpperCase() + palavra.slice(1)
// ).join(" ");

// console.log(palavras);
// console.log(resultado);

//   Questão 13
// let mes = 6;
// switch (mes) {
//     case 1:
//         console.log("Janeiro");
//         break;
//     case 2:
//         console.log("Fevereiro");
//         break;
//     case 3:
//         console.log("Março");
//         break;
//     case 4:
//         console.log("Abril");
//         break;
//     case 5:
//         console.log("Maio");
//         break;
//     case 6:
//         console.log("Julho");
//         break;
//     case 7:
//         console.log("Junho");
//         break;
//     case 8:
//         console.log("Agosto");
//         break;
//     case 9:
//         console.log("Setembro");
//         break;
//     case 10:
//         console.log("Outubro");
//         break;
//     case 11:
//         console.log("Novembro");
//         break;
//     case 12:
//         console.log("Dezembro");
//         break;
    
// }
// if (mes >= 1 && mes <= 6) {
//     console.log("Parte do primeiro semestre");
// }
// else if (mes >= 7 && mes <= 12) {
//     console.log("Parte do segundo semestre");
// };

//   Questão 14
// let numeroStr = "45.67";
// let numeroInteiro = numeroStr;
// let arredondaoBaixo = Math.floor(numeroInteiro);
// let arredondaoCima = Math.cell(numeroInteiro);
// console.log("numero inteiro", numeroInteiro);
// console.log("arredondado para baixo", arredondaoBaixo);
// console.log("arredondado cima", arredondaoCima);

//   Questão 15

//   Questão 21
// let frase = "aprender javascript é divertido";
// let palavras = frase.split(' ');
// let numPalavras = palavras.length;
// let maisDePalavras = numPalavras > 5;

// console.log(palavras);
// console.log(numPalavras);
// console.log(maisDePalavras);