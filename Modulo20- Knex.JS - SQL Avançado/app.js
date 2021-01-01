var database = require("./database");

// um dado po vez
var dados = {
  nome: "Sea of thieves",
  preco: 50.67
}

var dadosMult = [
  {
    nome: "Call of duty 2",
    preco: 60.99
  },
  {
    nome: "GTA",
    preco: 160.99
  },
  {
    nome: "PES 2021",
    preco: 299.99
  }
]


// INSERÇÃO DE DADOS
// var query = database.insert(dados).into("games");
// console.log(query.toQuery());

// database.insert(dadosMult).into("games").then(data => {
//   // retorna o id do dado inserido
//   console.log(data);
// }).catch( err => {
//   console.log(err);
// });

// SELECT
// database.select("*").table("games").then(data => {
//   // retorna o id do dado inserido
//   console.log(data);
// }).catch( err => {
//   console.log(err);
// });

// SELECT POR CAMPO
// database.select(["nome","preco"]).table("games").then(data => {
//   // retorna o id do dado inserido
//   console.log(data);
// }).catch( err => {
//   console.log(err);
// });

// NESTED QUERIES
// database.insert({nome:'God of war', preco: 98.99}).into("games").then(data => {
//   database.select("*").table("games").then(data => {
//     // retorna o id do dado inserido
//     console.log(data);
//   }).catch( err => {
//     console.log(err);
//   });// retorna o id do dado inserido
// }).catch( err => {
//   console.log(err);
// });

// var query = database.select("*")
//           .where({nome: 'God of war'})//condições
//           //.orWhere({id: 2})
//           .whereRaw("preco > 50")
//           .table("games");

// RAW
// var query = database.raw("SELECT * FROM games")
// console.log(query.toQuery());

// DELETE
// var query = database.where({id:1}).delete().table("games")
// console.log(query.toQuery());


// UPDATE
var query = database.where({id:1}).update({preco: 56}).table("games")
console.log(query.toQuery());


// ORDER BY
// database.select().table("games").orderBy("preco","DESC").then(data => {
//   // retorna o id do dado inserido
//   console.log(data);
// }).catch( err => {
//   console.log(err);
// });

// INSERT ASSOCIADO
// database.insert({
//   nome: 'RockStart',
//   game_id: 3
// }).table("estudios").then( data => {
//   console.log(data);
// }).catch( err => {
//   console.log(err);
// })

// JOIN
                //["games.id","estudios.id as estudio_id"]
// database.select(["games.*","estudios.nome as estudio"]).table("games").innerJoin("estudios","estudios.game_id","games.id").then( data => {
//     console.log(data);
//   }).catch( err => {
//     console.log(err);
//   })

  // JOIN WHERE
  /*
  database.select(["games.*","estudios.nome as estudio"])
          .table("games")
          .where("games.id",3)
          .innerJoin("estudios","estudios.game_id","games.id")
          .then( data => {
    var game = {
      id: 0,
      nome: "",
      estudios: []
    }

    game.id = data[0].id;
    game.nome = data[0].nome;

    data.forEach( estudio => {
      game.estudios.push({nome: estudio.estudio});
    });

    console.log(game);

  }).catch( err => {
    console.log(err);
  })*/

  // MANY TO MANY
 /* database.select([
          "estudios.nome as estudio_nome",
          "games.nome as game_nome"
        ]).table("estudio_games")
          .innerJoin("games","games.id","estudio_games.id_game")
          .innerJoin("estudios","estudios.id","estudio_games.id_estudio")
          //.where("games.id",3)
          .then( data => {
            console.log(data);
          }).catch(err => {
            console.log(err)
          })
*/   


// ROLLBACK
async function testeTransacao(){
  
  try {
    await database.transaction(async trans => {
        await database.insert({nome: "pixar 3"}).table("estudios");
        await database.insert({nome: "teste"}).table("estudios");
        await database.insert({nome: "Disney"}).table("estudios");
    });
  } catch (error) {
    console.log(error);  
  }

}

testeTransacao();