class Filme{
  
  constructor(titulo, ano, genero){
    this.titulo   = titulo;
    this.ano      = ano;
    this.genero   = genero;
    this.diretor  = '';
    this.atores   = [];
    this.duracao  = 0;
  }

  // MÉTODOS
  Reproduzir(){
    console.log('... Reproduzindo');
  }

  Pausar(){
    console.log('Pausa ||');
  }

  Fechar(){
    console.log('Fecha X');
  }

  Ficha(){
    console.log('Titulo: '+this.titulo);
    console.log('Ano: '+this.ano);
    console.log('Genero: '+this.genero);
  }

}

// INSTANCIANDO
  var vingadores = new Filme('Vingadores Ultimato',2018,"Ação");
  //vingadores.Reproduzir();
  //console.log(vingadores);
  vingadores.Ficha();
