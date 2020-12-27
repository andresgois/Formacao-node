const express       = require("express");
const app           = express();
const bodyParser    = require("body-parser");
const cors          = require("cors");
const jwt           = require('jsonwebtoken');

// TOKEN BASE
const JWTSecret = "nksndflsfcalplwppwkcqwertyuizxzcs";

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// MIDDLEWARE - FUNÇÃO EXECUTADA ANTES DE IR PARA A ROTA
function auth(req, res, next){

    // CABEÇALHO AUTHORIZATION
    const authToken = req.headers['authorization'];

    if(authToken != undefined){
        const bearer = authToken.split(' ');
        var token = bearer[1];

        jwt.verify(token, JWTSecret, (err, data) => {
            if(err){
                res.status(401);
                res.json({err: "Token Inválido"});
            }else{
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                //console.log(data)
                next();
            }
        })

    }else{
        res.status(401);
        res.json({err: "Falha Inválido"});
    }
    //console.log(authToken);
    next();
}

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id: 1,
            name: "andre gois",
            email: "andre@email.com",
            password: "123456"
        },
        {
            id: 20,
            name: "priscila erica",
            email: "pri.erica@email.com",
            password: "bia0516"
        }
    ]
}

app.get("/games", auth, (req, res) => {
    res.statusCode = 200;
    //res.json({empresa: req.empresa,user: req.loggedUser,games: DB.games});
    res.json(DB.games);
});

app.get("/game/:id", auth,(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
    }
});

app.post("/game", auth,(req, res) => { 
    var {title, price, year} = req.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    res.sendStatus(200);
})

app.delete("/game/:id", auth,(req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id);

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
    }
});

app.put("/game/:id", auth,(req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){

            var {title, price, year} = req.body;

            
            if(title != undefined){
                game.title = title;
            }

            if(price != undefined){
                game.price = price;
            }

            if(year != undefined){
                game.year = year;
            }
            
            res.sendStatus(200);

        }else{
            res.sendStatus(404);
        }
    }

});

app.post("/auth", (req, res) => {
    var { email, password } = req.body;
    if(email != undefined){
        var user = DB.users.find(u => u.email == email);

        if(user != undefined){

            if(user.password == password){
                // PAYLOAD -> INFORMAÇÕES QUE ESTÃO DENTRO DO TOKEN
                jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (err, token) => {
                    if(err){
                        res.status(401);
                        res.json({err: "Falha interna"});
                    }else{
                        res.status(200);
                        res.json({token: token});
                    }
                });

                
            }else{
                res.status(401);
                res.json({err: "Credenciais inválidas!"});
            }

        }else{
            res.status(404);
            res.json({err: "O E-mail enviando não existe na base de dados!"}); 
        }

    }else {
        res.status(400);
        res.json({err: "O E-mail enviando é inválido!"});
    }
})


app.listen(45678,() => {
    console.log("API RODANDO!");
});

/***
 * Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbmRyZUBlbWFpbC5jb20iLCJpYXQiOjE2MDg5ODc2MjQsImV4cCI6MTYwOTE2MDQyNH0.yuLuYjGQX-xTGBcPs4WfocOMXJNsnzHmvuzcO_GF1Gg
 */