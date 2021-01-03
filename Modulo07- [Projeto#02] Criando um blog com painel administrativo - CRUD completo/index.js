const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Category = require("./categories/Category");
const Article = require("./articles/Article");

// VIEW ENGINE
app.set('view engine', 'ejs');
// STATIC
app.use(express.static('public'));
// TRABALHAR COM FORMS
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CONEXÃO 
connection.authenticate()
          .then( () => {
            console.log("Conexão feita com sucesso!");
          })
          .catch((error) => {
            console.log(error);
          });


app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("Servidor rodadndo");
});