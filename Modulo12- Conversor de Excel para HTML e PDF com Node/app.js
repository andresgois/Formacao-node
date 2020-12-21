const fs = require('fs');


//**Lendo arquivos */
fs.readFile("./file.txt", {encoding: 'utf-8'} ,(error, dados) => {

    if(error){
      console.log("Error: "+error);
    }else{
      console.log(dados);
    }
});

// excrevendo no arquivo
fs.writeFile("./file.txt", "Nova linha", (err) => {
  if(err){
    console.log("Erro: "+err);
  }
})