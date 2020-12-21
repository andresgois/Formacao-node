class Animal{

  constructor(nome, idade, preco){
    this.nome = nome;
    this.idade = idade;
    this.preco = preco
  }

  metodoNovo(){
    console.log("Método classe mãe");
  }

  Checar(){
    return 10;
  }
}

class Cachorro extends Animal{

  constructor(nome, idade, preco, raca){
    super(nome, idade, preco)
    this.raca = raca
  }

  metodoNovo(){
    console.log("Na Filha");
    super.metodoNovo();
    console.log("Método classe filha");
  }

  latir(){
    console.log("Au au")
  }
}

var dog = new Cachorro("Goku",3,100,"Golden");
dog.latir();
dog.metodoNovo();
console.log(dog);