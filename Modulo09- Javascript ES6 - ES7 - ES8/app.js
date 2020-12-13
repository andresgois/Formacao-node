const app = {name: 'App'};
var nome = 'teste';
let variavel = 'variavel';

console.log(nome);
console.log(app.name);
console.log(variavel);

// ------------- ESCOPO  -------------
//        -> nivel de acesso da variável
var car = "Onix";

function fun1(){
  var montadora = 'Ford'
  console.log(car + ' Montadora: '+montadora);
}

function fun2(){
  console.log(car);//+ ' Montadora: '+montadora);
}

fun1();
fun2();
console.log(car);
//=================================
//var n = 10;
let n = 10;
console.log()
if(true){
  var a = 5;
  //let a = 5; -> let só funciona dentro do bloco
  console.log('Dentro do bloco: '+(n + a));
}
console.log('Fora do bloco: '+(n + a));

// ------------- PARAMETROS OPCIONAIS  -------------
// sempre por ultimo
function soma(a, b=5){
  console.log(a+b);
}

function sub(a,b, inv = false){
  if(inv){
    console.log(b - a);
  }else{
    console.log(a - b);
  }
}


// ------------- JSON Curtos  -------------
var idade = 31;
var empresa = 'SB LTDA';
var user = {
  nome:nome,
  idade: idade,
  empresa: empresa
}
console.log(user);

var user2 = {
  nome,
  idade,
  empresa
}
console.log(user2);

// ------------- Operador Spread  -------------
// spread -> ... 
var empresa2 = {
  nomeemp: "Coffe2Corporation",
  cidade: "Maranguape",
  site: "C02F"
}

var user2 = {
  nome,
  idade,
  ...empresa2
}
console.log(user2);

// ------------- Destructor  -------------
var {nome:nomeUser, idade } = user2;
console.log('Nome: '+nomeUser+' - Idade: '+idade);

// ------------- Arrow function  -------------
function normar(){
  console.log("Normal");
}
var normal2 = function(){
  console.log("Normal2");
}

var n3 = (a,n) => { console.log(a*n)};

var n4 = a => { return a; }


// ------------- Busca em arrays  -------------
var user1 = {
  name: 'Andre',
  empresa: 'Umber'
}
var user2 = {
  name: 'Luiz',
  empresa: 'DigitalOcena'
}
var user3 = {
  name: 'Marcos',
  empresa: 'AWS'
}

var users = [user1, user2, user3];

var usuario = users.find(user => user.name === 'Luiz');
console.log(usuario.empresa);

// ------------- Template Literal  -------------
let firstname = 'Andre';
let lastname = 'Gois';
console.log(`Nome ${firstname} ${lastname}`);