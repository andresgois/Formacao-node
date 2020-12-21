class Leitor{
  Ler(caminho){
    console.log("Conteúdo do arquivo");
  }
}

class Escritor{
  Escrever(arquivo, conteudo){
    console.log("Conteúdo escrito");
  }
}

class Criador{
  Criar(nome){
    console.log("Arquivo criado");
  }
}

class CriadorDePDF{
  Criar(nome){
    console.log("Arquivo de pdf criado");
  }
}

class Destruidor{
  Deletar(nome){
    console.log("Deletando Arquivo");
  }
}

class ManipuladorDeArquivo{
  constructor(nome){
    this.arquivo = nome;
    this.leitor = new Leitor();
    this.excritor = new Escritor();
    this.criador = new Criador();
    this.destruidor = new Destruidor();
  }
}

class GerenciadorDeUsuario{
  constructor(){
    this.criador = new CriadorDePDF();
    this.escritor = new Escritor();
  }

  SalvarListaDeUsuario(lista){
    this.criador.Criar("Usuarios.txt");
    this.escritor.Escrever("Usuarios.txt",lista);
  }
}

var manipulador = new ManipuladorDeArquivo("carro.txt");
manipulador.leitor.Ler();
manipulador.excritor.Escrever("carro.txt", "Bla bbla bla");