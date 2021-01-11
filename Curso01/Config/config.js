const env = process.env.NODE_ENV || 'dev';


const config = () => {

  switch(env){
    case 'dev':
      return {
        bd_string: 'mongodb+srv://andregois:123456Curso@cursoapi.je5zm.mongodb.net/cursoapi?retryWrites=true&w=majority',
        jwt_pass:  'batatafrita2019',
        jwt_expires_in: '7d'
      }
    case 'htm':
      return {
        
      }
    case 'prod':
      return {
        
      }
  }

}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();