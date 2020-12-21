const fs = require('fs');


function modificaUsuario(nome, curso, categoria){
  fs.readFile("./usuario.json", {encoding: 'utf-8'} ,(error, dados) => {

      if(error){
        console.log("Error: "+error);
      }else{
        var conteudo = JSON.parse(dados);
        conteudo.nome = nome;
        conteudo.curso = curso;
        conteudo.categoria = categoria;

        fs.writeFile("./usuario.json", JSON.stringify(conteudo), (erro) => {
          if(erro){
            console.log("Error: "+erro);
          }
        });
        console.log(conteudo);
      }
  });
}

modificaUsuario("Prscila", "Manicure", "Unhas");