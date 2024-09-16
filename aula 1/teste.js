// function classificarNota() {
//     const nota = parseInt(prompt('Digite a nota de todos os alunos'))
//     let resultado;
//     if (nota > 90) {
//         resultado = 'A. Excelente trabalho';
//     } else if (nota >= 80) {
//         resultado = 'B. Bom trabalho';
//     } else if (nota >= 70) {
//         resultado = 'C. Trabalho satisfatorio';
//     } else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar';
//     } else {
//         resultado = 'F. Insuficiente';
//     }
//     alert(`Sua nota é ${resultado}`);
// }
// classificarNota();

// function classificarNota() {
//     const nota = parseInt(prompt('Digite a nota de todos os alunos'))
//     const limiteA = parseInt(prompt('Qual o limite para nota A?'))
//     const limiteB = parseInt(prompt('Qual o limite para nota B?'))
//     const limiteC = parseInt(prompt('Qual o limite para nota C?'))
//     let resultado;
//     if (nota > 90 || nota <=100) {
//         resultado = 'A. Excelente trabalho';
//     } else if (nota >= 80) {
//         resultado = 'B. Bom trabalho';
//     } else if (nota >= 70) {
//         resultado = 'C. Trabalho satisfatorio';
//     } else {
//         resultado = 'Nota inválida';
//     }
    
//        alert(`Sua nota é ${resultado}`);
   
// }
// classificarNota();

//  function classificarNota() {
//         const nota = parseInt(prompt('Digite a nota de todos os alunos'))
//         if (nota <= 0 || nota >= 100) {
//             alert ('nota indefinida')
//         } else if (nota >= 90) {
//             alert ('A. Bom trabalho')
//         } else if (nota >= 80) {
//             alert ('B. Trabalho satisfatorio')
//         } else if (nota >= 60) {
//             alert ('C. Precisa melhorar')
//         } else {
//             alert ('blavla')
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
//     classificarNota();

//  function classificarNota() {
//         const nota = parseInt(prompt('Digite a nota de todos os alunos'))
//         if (nota > 80 || nota <= 90) {
//             alert ('voce esta quase la')
//         } else if (nota > 70 || nota <= 80) {
//             alert ('voce esta quase la')
//         } else if (nota > 60 || nota <= 70) {
//             alert ('voce esta quase la')
//         } else {
//             alert ('nada')
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
//     classificarNota();

//  function classificarNota() {
//         const nota = parseInt(prompt('Digite a sua nota de todos os alunos'))
//         if (nota > 80 || nota <= 90) {
//             alert ('sua nota está muito boa, mas não deixe de revisar os estudos')
//         } else if (nota > 70 || nota <= 80) {
//             alert ('voce esta quase la, mas foque nos estudos e revise mais')
//         } else if (nota > 60 || nota <= 70) {
//             alert ('voce esta quase la, mas revise mais os estudos e estude')
//         } else {
//             alert ('nada')
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
//     classificarNota();

//  function classificarNota() {
//         const comentario = parseInt(prompt('faça um comentario'))
//         const nota = parseInt(prompt('Digite a sua nota de todos os alunos'))
//         let resultado; 
//         if (nota > 80 || nota <= 90) {
//             resultado = 'sua nota está muito boa, mas não deixe de revisar os estudos';
//         } else if (nota > 70 || nota <= 80) {
//             resultado = 'voce esta quase la, mas foque nos estudos e revise mais';
//         } else if (nota > 60 || nota <= 70) {
//             resultado = 'voce esta quase la, mas revise mais os estudos e estude';
//         } else {
//             resultado = 'nada';
//         }
//         alert(`Resultado: ${resultado}`);
//         alert(`Seu comentario ${comentario}`);
//     }
//     classificarNota();

//  function classificarNota() {
//         const nota = parseInt(prompt('Digite a sua nota '))
//         if (nota > 80 || nota <= 90) {
//             alert ('sua nota está muito boa, mas não deixe de revisar os estudos')
//         } else if (nota > 70 || nota <= 80) {
//             alert ('voce esta quase la, mas foque nos estudos e revise mais')
//         } else if (nota > 60 || nota <= 70) {
//             alert ('voce esta quase la, mas revise mais os estudos e estude')
//         } else {
//             alert ('nada')
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
//     classificarNota();
        //   add no incio
// const numeros = [1,2,3,4,5]
// numeros.unshift(77)
// console.log(numeros)

//    29/08  -  01
// const frutas = ['maçã', 'banana', 'laranja']
// frutas.unshift('abacaxi')
// frutas.push('manga')
// frutas.shift()
// frutas.pop()
// console.log(frutas)

//     02
// const numeros = [10,20,30,40,50]
// numeros.splice(2,0,25)
// numeros.splice(4,1)
// console.log(numeros)

//    03
// let cores = ['vermelho', 'azul', 'verde', 'amarelo', 'azul'];
// console.log(cores.indexOf('azul'))
// console.log(cores.lastIndexOf('azul'))
// console.log(cores.includes('roxo'))

//   04
// let alunos = ['João', 'Ana', 'Carlos', 'Bia']
// alunos.splice(2,1)
// alunos.push('Maria')
// alunos.unshift('Pedro')
// console.log(alunos)

//   05
// let animais = ['gato', 'cachorro', 'pássaro', 'peixe', 'gato'];
// animais.splice(2,1)
// animais.shift()
// animais.push('Hamster')
// console.log(animais)
// console.log(animais.includes('gato'))

//   06
// let livros = ['O senhor dos anéis', '1984', 'O Pequeo Príncipe', 'Harry Potter']
// livros.splice(2,1)
// console.log(livros)
// console.log(livros.indexOf('1984'))

//    07
// let cidades = ['São Paulo', 'Rio de Janeiro', 'Salvador', 'Bahia']
// cidades.unshift('Curitiba')
// console.log(cidades)
// console.log(cidades.includes('Salvador'))

//   08
// let jogos = ['fifa', 'minecraft', 'fortnite', 'among us'];
// jogos.splice(1,1,'the sims')
// jogos.shift()
// console.log(jogos)

//   09
// let esportes = ['futebol', 'basquete', 'volei', 'tenis']
// esportes.shift()
// esportes.splice(2,1)
// console.log(esportes)
// console.log(esportes.includes('volei'))

//    10
// let tec = ['html', 'css', 'js', 'react']
// tec.pop()
// tec.unshift('node.js')
// console.log(tec)
// console.log(tec.indexOf('js'))

//    11
// let filmes = ['Matrix', 'Inception', 'Avatar']
// filmes.unshift('Interstellar')
// filmes.pop()
// filmes.push('the godfather')
// console.log(filmes)

//   12
// let cores = ['vermelho', 'azul', 'verde', 'amarelo']
// cores.splice(2,1,'roxo')
// console.log(cores)

//    13
// let times = ['flamengo', 'corinthians', 'palmeiras']
// console.log(times.includes('sao paulo'))
// times.push('sao paulo')
// console.log(times)

//    14
// let comidas = ['pizza', 'hamburguer', 'sushi', 'lasanha']
// comidas.splice(2,1)
// console.log(comidas)
// console.log(comidas.indexOf('sushi'))

//   15
// let numeros = [5, 10, 15, 20]
// numeros.push(25)
// numeros.splice(1,1)
// numeros.unshift(7)
// console.log(numeros)

//    16
// let planetas = ['terra', 'marte', 'jupiter', 'saturno']
// planetas.shift()
// planetas.unshift('venus')
// console.log(planetas)

//   17
// let cursos = ['matematica', 'fisica', 'quimica', 'biologia']
// cursos.splice(1,1)
// console.log(cursos)
// console.log(cursos.includes('fisica'))

//   18
// porra de marca de carro

//   19
// let idiomas = ['ingles', 'espanhol', 'frances', 'alemao'];
// idiomas.shift()
// idiomas.push('italiano')
// console.log(idiomas)
// console.log(idiomas.indexOf('frances'))

//   20
// let frutas = ['maçã', 'banana', 'laranja', 'uva'];
// frutas.unshift('morango');
// console.log(frutas);
// console.log(frutas.includes('laranja'));