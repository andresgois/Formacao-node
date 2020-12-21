class Dado{

  constructor(faces){
    this.face = faces;
  }

  Rolar(){
    console.log("Resultado do dado: "+ this.GetRandomIntInclusive(1, this.face))
  }

  GetRandomIntInclusive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
}

var d6 = new Dado(6);
var d24 = new Dado(24);
d6.Rolar();
d24.Rolar();