# Curso básico de APIs com Nodejs + Express + Mongodb
#### Instalações
- npm init
- npm install --save express
- npm install --save body-parser
- npm install --save mongoose
- npm install --save bcrypt

##### Exmplo com queries
```
app.post('/', (req, res) => {
  let obj = req.query;
  return res.send({message: `Nome ${obj.nome}`})
})
```
##### Estrutura da aplicação
- app.js
  - > definindo o arquivo
  - > usando o arquivo
  ```
  app.use('/users', usersRoute);
  ```
- Rotas da aplicação
  - > index.js
  - > users.js
#### Usando o MondoDB
- Criar conta no Atlas, para usar até 512Mb no MongoDB
  - https://account.mongodb.com/account/register?signedOut=true
  - Cria um usuário para acessar a aplicação
    - Database Access
    - ADD NEW DATABASE USER
    - nome e senha 
    - 123456Curso
  - Cria um novo Cluster
    - Cloud Provider & Region
    - Seleciona uma região FREE
    - Digita um nome para o Cluster
    - Create Cluster 
  - Em Clusters
    - Connect Cluster
    - Choose a connection method
    - Connect your application
    - escolha a versão do node
    - copie a string de conexão
  - Para quem não conseguiu se conectar ao banco de dados, pode ter faltado a configuração de liberação de IP no painel de configuração do MongoDB Atlas. Para configurar, basta acessar a aba "Security", depois a aba "IP Whitelist", depois clicar no botão "ADD IP ADDRESS" e incluir o seu IP ou deixar que todos os IP's possam se conectar, incluindo "0.0.0.0/0" sem aspas.
  -



  
