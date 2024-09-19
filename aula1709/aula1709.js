let livros = [
   {"titulo": "harry potter", "quantidade": 17},
   {"titulo": "pequeno principe", "quantidade": 7},
 {"titulo": "diario de um banana", "quantidade": 5}
 ];

function livrosComEstoqueSuficiente(livros) {
   let resultado = [];
   livros.forEach(livro =>{
      if (livro.quantidade >= 10) {
         resultado.push(livro)
      }
   })
   if (resultado.length>0) {
      return resultado;
   } else {
      return "nenhum livro com quantidade maior ou igual a 10"
   }
}
console.log(livrosComEstoqueSuficiente(livros))
