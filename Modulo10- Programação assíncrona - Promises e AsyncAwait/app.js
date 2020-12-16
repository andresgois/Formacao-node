
// já é assincrono
setTimeout(() => {
  console.log('Exibe depois de 2s');
},2000);

/*function enviarEmail(corpo, para){
  setTimeout(() => {
    console.log(`
      Para: ${para}
      ----------------------------
      ${corpo}
      ----------------------------
      De: Teest
    `);
  },2000);
}

console.log('Inicio do envio');
enviarEmail("Oi, tudo bem","andre@emial.com");
console.log('Enmail enviado');
console.log('Tudo OK');*/

//---------------- Agora por callback
/*function enviarEmail(corpo, para, callbalb){
  setTimeout(() => {
    console.log(`
      Para: ${para}
      ----------------------------
      ${corpo}
      ----------------------------
      De: Teest
    `);
    callbalb();
  },2000);
}

console.log('Inicio do envio');
enviarEmail("Oi, tudo bem","andre@emial.com", () => {
    console.log('Enmail enviado');
    console.log('Tudo OK');
});*/

//---------------- Promise
function enviarEmail(corpo, para){
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      var deuErro = false;
      console.log("Email enviado");

      if(!deuErro){
        resolve({time:6, to: "andre@email.com"});  // Promessa OK
      }else{
        reject("Não enviado");   // Foi mal, eu falhei :(
      }
    },4000);
  })
}

enviarEmail("Olá mundo", "andre@email.com")
      .then( ({time, to}) => {
        console.log(`
          Time: ${time}
          ------------------------
          To: ${to}
        `);
      }).catch( (err) => {
        console.log("Error: " + err);
      });


      function pegarId(){
        return new Promise( (res, rej) => {
          setTimeout( () => {
            res({id: 5});
          },1500)
        })
      }

      function buscaEmailNoBanco(id){
        return new Promise( (res, rej) => {
          setTimeout(() => {
            res('andre@email.com');
          },2000);
        })
      }

      // pegarId().then( (id) => {
      //   buscaEmailNoBanco(id).then((email) => {
      //     enviarEmail("Email enviado com sucesso", email).then(() => {
      //       console.log("Eamil: "+email+" - Id: "+JSON.stringify(id));
      //     }).catch((err) => {
      //       console.log(err);
      //     });
      //   })
      // })

      //Aula 13
