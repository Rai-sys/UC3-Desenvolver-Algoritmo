// function verificarIdade(listaDeIdade) {
//     for (let i = 0; i < listaDeIdade.length; i++) {
//         if (listaDeIdade[i] < 18) {
//             return 'Alguem nao pode entrar';
//         }
//     else {
//         return 'Todos podem entrar'
//     }
// }
// }
// let idades = [16, 22, 19, 30, 45];
// console.log(verificarIdade(idades))

// function contar() {
//     let i = 1
//     let contador = 0
//     while (i <= 50) {
//         if (i % 2 === 0) {
//             contador = contador + 1
//         }
//         i++;
//     }
//     return contador
// }
// console.log(contar())

// function classificarCor(numero) {  // Switch com variavel
//     switch (numero) {
//         case 1:
//             return "cor clara";
//         case 2:
//             return "cor média";
//         case 3:
//             return "cor escura";
//         default:
//             return "cor desconhecida";
//     }
// }
// console.log(classificarCor(1));
// console.log(classificarCor(2));
// console.log(classificarCor(3));

// function validarSenha (senha) {          // Switch com true
//     const comprimento = senha.length;
//     switch (true) {
//         case (comprimento < 8):
//             return 'senha fraca';
//         case (comprimento >= 8 && comprimento <= 12):
//             return 'senha média';
//         case (comprimento > 12):
//             return "senha forte";
//     }
// }
// console.log(validarSenha("abc123"));
// console.log(validarSenha("abcdefghi"));
// console.log(validarSenha("abcdefhgijklm"));

// function classificarNotas (nota) {
//     const avaliacao = nota;
//     switch (true) {
//         case (avaliacao > 90):
//             return "Nota A";
//         case (avaliacao >= 80 && avaliacao <= 89):
//             return "Nota B";
//         case (avaliacao >= 70 && avaliacao <= 79):
//             return "Nota C";
//         case (avaliacao >= 60 && avaliacao <= 69):
//             return "Nota D";
//         case ( avaliacao < 60):
//             return "Nota F";
//     }
// }
// console.log(classificarNotas(95));
// console.log(classificarNotas(85));
// console.log(classificarNotas(75));
// console.log(classificarNotas(65));
// console.log(classificarNotas(55));

// function exibirFizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 2 == 0 && i % 3 === 0 && i % 5 === 0) {
//             console.log(i, "FizzBuzzBoom");
//         } else if (i % 2 == 0 && i % 3 == 0){
//             console.log(i,"FizzBuzz");
//         } else if (i % 3 == 0 && i % 5 == 0) {
//             console.log(i,"BuzzBoom");
//         } else if (i % 2 == 0 && i % 5 == 0) {
//             console.log(i,"FizzBoom");
//         } else if (i % 2 == 0) {
//             console.log(i,"Fizz")
//         } else if (i % 3 == 0) {
//             console.log(i,"Buzz")
//         } else if (i % 5 == 0) {
//             console.log(i,"Boom")
//         } else {
//             console.log(i)
//         }
//     }
    
// }
// exibirFizzBuzz()

// function classificarNotas (nota) {
//         const avaliacao = nota;
//         switch (true) {
//             case (avaliacao > 90):
//                 return "Nota A";
//             case (avaliacao >= 80 && avaliacao <= 89):
//                 return "Nota B";
//             case (avaliacao >= 70 && avaliacao <= 79):
//                 return "Nota C";
//             case (avaliacao >= 60 && avaliacao <= 69):
//                 return "Nota D";
//             case ( avaliacao < 60):
//                 return "Nota F";
//         }
//     }
//     console.log(classificarNotas(95));
//     console.log(classificarNotas(85));
//     console.log(classificarNotas(75));
//     console.log(classificarNotas(65));
//     console.log(classificarNotas(55));

