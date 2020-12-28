|-------------------------------------------------------------------------------|
|     ============================ MÓDULOS ============================         |
|        ***************** SESSÕES DENTRO DO CURSO *****************            |
|                                                                               |
|-------------------------------------------------------------------------------|

============================ MÓDULOS 01 ============================         
            ***************** BÁSICO *****************
É um interpretador javascript, que roda fora dos navegadores
 - muito leve
 - muito rápido
 - usa javascript
 - tem um dos maiores ecossitemas do mundo
 - está sendo utilizado fortemente no mercado
 - muito fácil aprender

------------- INSTALAÇÃO
  * site                      = https://nodejs.org/en/
  * testar se está instalado  = node -v



============================ MÓDULOS 02 ============================         
            ***************** VERBOS *****************
 - Utilizando o módulo http, que uma biblioteca nativa do node, basta
 fazer um require e atribuir a uma variável e começa a usar.



============================ MÓDULOS 03 ============================         
            ***************** EXPRESS *****************
 - Iniciando um novo projeto
 - npm init: inicializa um novo projeto com package.json, com algumas configurações
 - instalando um projeto NPM, fica masi fácil gerenciar bibliotecas nele, --save: salva arquivos do express 
 - instalação do EXPRESS : npm install express --save
 - nodemon : modulo responsável por reiniciar o servidor se que houver uma mudança
 - instalação : -g instalação global
    npm install nodemon -g
 - iniciando o nodemon
    nodemon index.js
 - REQ => DADOS ENVIADOS PELO USUÁRIO
 - RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
 - Rotas com parametros
   * parametros obrigatórios
      app.get('/ola/:nome', (req, res) ...
   * parametros não obrigatórios
      app.get('/ola2/:nome/:funcao?', (req, res)...
 - Rotas com query param
      var canal = req.query["canal"];


============================ MÓDULOS 04 ============================         
  ***************** Projeto Perguntas e respostas *****************
---- DEPENDÊNCIAS
   - index.js -> página principal
   - EXPRESS -> npm install express --save
   - EJS -> npm install ejs --save
   - body-parser -> npm install body-parser --save
   - Sequelize -> npm install --save Sequelize
   - mysql   -> npm install --save mysql2

---- CONFIGURAÇÕES 
   - npm init   
   - Definindo motor EJS
         -> app.set('view engine','ejs');
   - utilizado para pegar variavéis
         -> <%=  %>
   - utilizado para expressões
         -> <%  %>
   - definindo arquivos estáticos
         -> app.use(express.static('public'));
   - para adicionar arquivos css externos, você deve carregar o link
abaixo do css do bootstrap   
   - para incluir partials
         -> <%- include('./partials/header.ejs'); %>
   - biblioteca para pegar pelo método post
         -> body-parser
         ele traduz os dados enviados pelo usuário, para uma maneira
         que seja reaproveitavél pela aplicação
   - Caso de erro ao verificar a conexão no mysql2         
         -> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

============================ MÓDULOS 05 ============================         
  *********** Hospedagem de aplicações na Digital Ocean ***********
----- INFORMAÇÕES
   - SITE: https://www.digitalocean.com/
   - VPS: servidor virtual privado
----- FAZENDO DEPLOY
   ----- Deploy simples
   - cria a conta
   - Get Started with a Droplet  
   - Qual S.O 
   - Requisitos para o servidor (mais barato)
   - Região do data center
   - Authentication
   - SSH keys, New SSH keys
   - necessário software para gerar chave SSH
   - Usaremos o putty
   - abra o PuTTyGen
   - generate
   - copia a chave
   - volta ao authentication e add public SSH key 
   - no putty save a chave public e a privada
   - Nome do servidor
   - Create Droplet 
   ----- acessando server
   - abre o putty 
   - Connection -> SSH -> Auth 
   - pega a arquivo privado para abrir a chave
   - em Droplet copia o IP do servidor
   - no puTTTy cola em Session Host, Typo SSH e save a Session 
   - open
   - user = root
   ---- instalações
   - baixar e nodejs, atualiza a lista de pacote do ubuntu, instala o mysql-server 
   - depois digita: mysql_secure_installation
   ---- subindo arquivos
   - Instalar e onfigurar o fillezila na sua máquina
   - Protocolo: SFTP
   - HOST: IP do servidor
   - tipo de logon: Arquivo de chave
   - user: root e clique em procurar e adicione a chave privada, Conectar
   - cria uma pasta 
   - coloca todos os arquivos da pasta menos a node_modules
   - entra na pasta pelo puTTTy e instala: npm install 
   ----- configurar o banco
   - entra no banco e cria um database
   - entra na pasta que tem o banco de dados e abre com o nano
   - edite as informações necessárias
   - executa o: node index.js
   - caso de erro digite esse comando
      -> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'senha do mysql'
   - porta padrão da web e a 80, então alterar no index.js
   ---- colocar o node para rodar em background
   - utilize o pm2: sudo npm install -g pm2 
   - entra no diretório do arquivo principal, no caso, index,js
   - digita: pm2 start index.js


.
.
.

============================ MÓDULOS 09 ============================         
   ************** Javascript ES6 - ES7 - ES8 **************
   - declarando constante
      -> const nome = 'teste';  | não pode ser alterado
   - Declaração de variáveis
      -> var | Funciona em: Global, local  e de bloco
      -> let | Funciona em: Global, local
   - Bloco é tudo que está entre {}


============================ MÓDULOS 10 ============================         
   ************** Promises e AsyncAwait **************   
   - Programação Sincrona - Bloqueante
   - Programação Assincrona - executa em paralelo



============================ MÓDULOS 11 ============================         
   ************* Orientação a objetos com Javascript *************  
- Classes
   -> Atributos
      - Titulo, Genero
   -> Métodos
      - Carregar, Executar
- Abstração

============================ MÓDULOS 12 ============================         
   ********* Conversor de Excel para HTML e PDF com Node ********* 
- Tipos de arquivos
   -> Texto - Ler e entender oq ue tem neles 
      .json, .txt, .php 
   -> Binário - 
      .pdf, .avi, de jogos, .exe 
- app.js 
   -> inicio de exemplos
- index.js 
   -> mais exemplos 
- main.js
   -> inicio do app 
   -> função que pegar uma função e transforma em uma Promise
      - const util = require('util')
      - util.promisify(funcao)
- Biblioteca para escrever PDF
   -> npm install html-pdf --save


============================ MÓDULOS 13 ============================         
   ************ Introdução a API REST com Node ************    
- HTTP 
- Verbos HTTP
   - GET    : obter dados
   - POST   : envia dados
   - PUT    : atualiza dados completamente
   - DELETE : deleta dado
   - PATCH  : atualiza dados parcialmente
- Status Code
   - 201    : criado
   - 200    : Ok
   - 400    : requisição inválida
   - 401    : não autorizado
   - 404    : não encontrado
   - 500    : erro no servidor
- Web Services
   - API que funciona através do HTTP, na web, Interface de comunicação
   - REST
      - Padrão
      - REGRAS 
         -> Cliente servidor           : só é servidor
         -> Stateless                  : não guarda estado do Cliente
         -> Cacheável                  : permitir cache
         -> Saber trabalhar com camadas: não importa se houve algo entre o cliente e o servidor
         -> Interface uniforme e direta: URL Correta, Ex: DELETE http://meusite/cliente/1
   - RESTFULL
      - Imprementa a arquitetura REST mais todas as outras especificações
      - Level 0 -> está focado em uma única Rota
      - Level 1 -> dividido em recursos, Ex: endPoint para produto, Pedido, Cliente
      - Level 2 -> Utiliza os verbos HTTP
      - Level 3 -> além de informar as infosações pedidas, informa todas as ações possíveis
   -  recursos para aplicação
      - express
      - body-parser
- Criação de uma API 


============================ MÓDULOS 14 ============================         
   ************ Consumo de API REST com Axios ************  
- Será construida um front-end para consumir a API feita no módulo anterior 
- Comunicação do Front-End com Back-End através da LIB Axios 

   
============================ MÓDULOS 15 ============================         
   ************ Autenticação de API Rest com JWT ************
- API do módulo 13 está aberta, quer dizer qualquer pessoa pode fazer os 4 tipos de requisições
- JWT 
   -> 
- Biblioteca do node para geração de JWT
   -> npm install --save jsonwebtoken

============================ MÓDULOS 16 ============================         
   ************ Consumo de API Rest com JWT ************
- Refatorando o front para aceitar a Autenticação


============================ MÓDULOS 17 ============================         
   ************ Documentação de API Rest ************
- MARKDOWN  
   -> Documentação para API
   -> blog.da2k.com.br/2015/02/08/aprenda-makdown 
   
