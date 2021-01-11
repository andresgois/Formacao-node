# Aprenda a criar API's robustas do ZERO totalmente na prática com NodeJs + Express.

## INTRODUÇÃO
- Back-end
- Rotas
- NodeJS não é linguagem de programação. (PLATAFORMA).
- | O que é NPM / YARN
  - Gerenciador de pacote
  - Instala bibliotecas de terceiros
  - Cria suas próprias bibliotecas
  - Por que YARN
- | Características do Node
  - Arquitetura Event-llop
    - Call stack (Pilha de eventos)
  - Single-thread
  - Non-Blocking I/O
- | API REST
  - > FLuxo: Requisição e resposta
  - > Frontend: recebe os dados e processa
  - > Resposta: através da estrutura de dados
- | Rotas
  - > GET http://minhapai.com/usuarios
  - > POST http://minhapai.com/usuarios
  - > PUT http://minhapai.com/usuarios/1
  - > DELETE http://minhapai.com/usuarios/1
  - > VERBO     ROTA      PARAMENTRO
- | VANTAGENS
  - > Vários clientes (front-end)
  - > Comunicação padronizada (web, mobile, desktop)
- | JSON (Javascript object notation)
```
{
  "usuarios":{
    "nome": "André Gois",
    "email": "andre@email.com",
    "sexo": "M"
  }
}
```
- | REQUISIÇÂO
  - > GET http://minhapai.com/usuarios      = Obtendo todos os usuários
  - > GET http://minhapai.com/usuarios/1    = Pegando usuário específico
  - > POST http://minhapai.com/usuarios     = Cria usuário
  ```
  {
    "nome": "André Gois",
    "email": "andre@email.com"
  }
  ```                                       
                                            = Body (request body)
  ```
  {
    "token": "ndsngfçakiewripksafpcdxz"
  }
  ```                                       
                                            = Headers

## CONFIGURAÇÃO DO EDITOR DE CÓDIGO
- Plugins
  - vscode-icons
  - dracula official
- Configurações
  - ctrl+shift+p
    - Open settings
      - "editor.fontSize": 23                                 -> Tamanho da fonte
      - "editor.renderLineHighlight": "gutter"                -> marca com uma linha ao redor do cursor
      - "editor.tabSize": 4                                   -> espaço no tab
      - "terminal.integrated.fontSize": 16                    -> fonte do terminal
      - "javascript.updateImportsOnFileMove.enbled": "never"  -> atualiza os caminhos
      - "editor.parameterHints.enbled": false                 -> caixinha com dicas
      - "breadcrumbs.enbled": true                            -> mostra o caminho completo do arquivo lá em cima
## API 01
  ### MÓDULO 1
  - | Iniciando aplicação
    - yarn init -y
    - yarn add express
  - | Params
    - Query params
      - ?nome=Nodejs
    - Route params
      - /curso/2
    - Request body
      - { nome: 'NodeJs', tipo: 'backend' }

## API 02
  ### MÓDULO 2
  - | Iniciando aplicação
    - yarn init -y
    - yarn add express 
    - yarn add sucrase -D
    - yarn add mongoose
    - yarn add multer    
    - yarn add cors
        - Para trabalhar com multpartformdata
  - | Configurando o sucrase e o nodemon
    - sucrase
      - configura o import e export
      - import express from 'express'; 
      - export default routes;
    - nodemon
      - servidor de live reload
    - nodemon rodadando através de subpastas
    ```
     "scripts": {
        "dev": "nodemon src/server.js"
      }
    ```
    - cria um nodemon.json na rais, com:
    ````
    {
      "execMap": {
        "js": "node -r sucrase/register"
      }
    }
    ````
    - yarn sucrase-node src/server.js
    - yarn dev
