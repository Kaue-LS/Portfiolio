---
title: 'Cadastro de clientes'
utilizado: 'Projeto feito com modelo M.E.R.N  STACK com banco de dados mongoose na própria máquina, a página contém painel de administrador e página destinada para clientes.'
coverImage: '/assets/img/Cadastro.jpg'
projectUrl: 'https://github.com/Kaue-LS/Projeto-M.E.R.N'
date: '2022-03-08T05:35:07.322Z'
tools: 'M.E.R.N Stack / React.js / Node.js / Express.js / Mongooose / Axios / Rest API'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

## Sobre o projeto:

O projeto foi feito com o objetivo de aprender sobre criação de rotas, autenticação e cadastro de ususarios feitos no Back-end. 

## Estrutura:
  Está dividido em duas pastas, uma de Back-End e outra Front-End
  # Back-End:
  Contém o banco de dados que pode ser inicializado na máquina, as pastas contém as principais funções:
  
  **-Models**: Responsável para a criar a estrutura do banco de dados.

  **-Controllers**: Realiza o CRUD (Create, Read, Update, Read) do banco de dados além de também as autentções do usuário.  

  As rotas para realizar cada função está no arquivo **routes.js**.  <br />

  Para iniciar é preciso ter instalado o **MongoCompass** e pegar o endereço que esta no **server.js** para ativar o banco de dados. Após isso, no terminal digite **node server.js** ou instale o **nodemon server.js** para alterar automaticamente o banco de dados caso haja aguma.


## Front-End:
  Localizada na pasta **cadastro**

  # Estrutura:
  **-Pages**: Contem as páginas do site. As **rotas** estão no arquivo **Router.js**.

  **-Services**: Contém as condições para que o administrador tenha o sidebar e rotas privadas, autenticação jwt, e também a conexão da API.

  **-Components**: Partes da página, como página não encontrada, navbar e sidebar.
  
  **-Styes**: A estilização da página.
  

