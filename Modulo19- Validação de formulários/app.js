const bodyParser = require('body-parser');
const express = require('express');
const session = require('express-session');
const app = express();
const flash = require('express-flash');
const ejs = require('ejs');
const cookieParser = require('cookie-parser');

app.set('view engine','ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser("asnjhdkifrjhiosjcmklmdclk"));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

app.use(flash());


app.get('/', (req, res) => {
  var emailError  = req.flash("emailError");
  var nomeError   = req.flash("nomeError");
  var pontosError = req.flash("pontosError");
  var email       = req.flash("email");
  var nome        = req.flash("nome");
  var pontos      = req.flash("pontos");
  emailError      = (emailError == undefined || emailError.length == 0)   ? undefined : emailError;
  nomeError       = (nomeError == undefined || nomeError.length == 0)     ? undefined : nomeError;
  pontosError     = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError;
  email           = (email == undefined || email.length == 0)             ? "" : email;
  nome            = (nome == undefined || nome.length == 0)               ? "" : nome;
  pontos          = (pontos == undefined || pontos.length == 0)           ? "" : pontos;

  console.log("Está rodando...");
  res.render("index", {emailError,nomeError, pontosError, email: email, nome: nome, pontos: pontos});
});

app.post('/form', (req, res) => {
  var {email, nome, pontos} = req.body;

  var emailError;
  var nomeError;
  var pontosError;

  if(email == undefined || email == ""){
    emailError = "O E-mail não pode ser vazio";
  }

  if(nome == undefined || nome == ""){
    var nomeError = "O E-mail não pode ser vazio";
  }

  if(pontos == undefined || pontos == "" || pontos < 20){
    pontosError = "Você não pode ter menos que 20 pontos";
  }

  if(emailError != undefined || nomeError != undefined || pontosError != undefined){
    req.flash("emailError",emailError);
    req.flash("nomeError",nomeError);
    req.flash("pontosError",pontosError);
    req.flash("email",email);
    req.flash("nome",nome);
    req.flash("pontos",pontos);
    res.redirect("/");
  }else{
    res.send("Muito bom!");
  }


  res.render("index")
});


app.listen(3000, (req, res) => {
  console.log('Rodando');
});