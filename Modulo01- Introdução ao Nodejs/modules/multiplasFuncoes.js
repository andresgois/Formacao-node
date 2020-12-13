let versao = "Multiplas funções";

function som(a, b){
  return a+b;
}

function mult(a, b){
  return a*b;
}

function div(a, b){
  return a/b;
}

function sub(a, b){
  return a-b;
}

module.exports = {
  som,
  mult,
  div,
  sub,
  versao
}