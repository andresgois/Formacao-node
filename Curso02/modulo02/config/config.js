const env = process.env.NODE_ENV || 'dev';


const config = () => {

  switch(env){
    case 'dev':
      return {
        bd_string: 'mongodb+srv://andresgois:05042010apbA*@modulo01.hn7rc.mongodb.net/modulo01?retryWrites=true&w=majority',
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

export default config();