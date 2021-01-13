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
  ##### Body (request body)
  ```
  {
    "token": "ndsngfçakiewripksafpcdxz"
  }
  ```                                       
  ##### Headers

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
    - yarn add yup
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
    - cria um nodemon.json na raiz, com:
    ````
    {
      "execMap": {
        "js": "node -r sucrase/register"
      }
    }
    ````
    - yarn sucrase-node src/server.js
    - yarn dev

## Padrão de Código
  ### MÓDULO 3
  - | Extension VSCode
    - EditorConfig VS Code
    - Botão direto no explore, generator editorConfig
    - mude para: true
      - root = true
      - [*]
      - end_of_line = lf
      - indent_style = space
      - indent_size = 2
      - charset = utf-8
      - trim_trailing_whitespace = true
      - insert_final_newline = true
    - yarn add eslint -D
    - Extension: ESLint 
    - yarn eslint --init
      - config
        - > Olhar sintaxe e corrigir
        - > (import/export) | (require/exports) | none
        - > Qual Framework? React | Vue | ..
        - > Utiliza TypeScript? Y| N
        - > Utiliza codigo no: Browser | Node
        - > Qual padrão vai utilizar: popula style guide | outro
        - > Qual? Airbnb | Standard | Google
        - > Formato do arquivo de configuração: JS | YAML | JSON
        - > Instalar tudo usando npm? Y|n
        - > 
      - se der erro, apague o node_modules, depois dê um YARN, e faça tudo denovo
      - caso queira só pelo yarn
        - delete o : package-lock.json
        - digite no cmd: yarn
    - Para Adicionar todas as correções automaticamente
      - CTRL+SHIFT+p
        - Open settings JSON
        ```
        {
            "workbench.iconTheme": "vscode-great-icons",
            "diffEditor.ignoreTrimWhitespace": true,
            "editor.suggestSelection": "first",
            "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
            "window.zoomLevel": -1,
            "workbench.colorTheme": "Dracula",
            "editor.renderLineHighlight": "gutter",
            "editor.tabSize": 2,
            "terminal.integrated.fontSize": 16,
            "javascript.updateImportsOnFileMove.enabled": "always",


            "eslint.autoFixOnSave":true,
            "eslint.validate":[
                {
                    "language": "javascript",
                    "autoFix": true
                },
                {
                    "language": "javascriptreact",
                    "autoFix": true
                },
                {
                    "language": "typescript",
                    "autoFix": true
                },
                {
                    "language": "typescriptreact",
                    "autoFix": true
                },
            ],
            "editor.codeActionsOnSave": {
                "source.fixAll.eslint": true
            },

            // Formata o arquivo quando salvar ele
            "editor.formatOnSave": false,
            "liveServer.settings.donotShowInfoMsg": true,

        }
      ```
      - Configurar o .eslintrs.js
      ```
      module.exports = {
          env: {
            browser: true,
            es2021: true,
          },
          extends: [
            'airbnb-base',
          ],
          globals: {
            Atomics: 'readonly',
            SharedArrayBuffer: 'readonly',
          },
          parserOptions: {
            ecmaVersion: 2018,
            sourceType: 'module',
          },
          rules: {
            'class-methods-use-this': 'off', // tira a obrigação de usar o this dentro da class
            'no-param-reassign': 'off', // permite receber parametro e fazer alteraações nele
            camelcase: 'off',
            'no-underscore-dangle': 'off', // permite passa parametro com underline
            'no-unused-vars': ['error', { argsIgnorePattern: 'next' }], // permite criar variável, mesmo que nunca utilize
          },
        };
      ``` 
    - Extension: Prettier - Code formatter
      - quebra o código
      - identa
      - deixa o código mais bonito
    - yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
    - agora adicione isso abaixo no .eslintrc.js
    ```
    extends: [
      'airbnb-base',
      'prettier',
    ],
    plugins: ['prettier'],
    rules: ["prettier/prettier": "error",]
    ```
    - crie um arquivo com nome: .prettierrc
    - // passa aspas simples
    ```
    {
      "singleQuote": true,
      "trailingComma": "es5"
    }

    ```
    - Corrigirá tudo, atenção na pasta "Especifica desse projeto"
    - no cmd dê esse comando
      - yarn eslint --fix src --ext .js



