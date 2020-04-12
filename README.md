<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src=".github/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio 2: FastFeet, o início
</h3>

<h3 align="center">
  :warning: Etapa 1/4 do Desafio Final :warning:
</h3>

<p>Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack, por isso é fundamental que ele seja feito com muito empenho!</p>

<blockquote align="center">“Não espere para plantar, apenas tenha paciência para colher”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-02?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-02?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

A aplicação que iremos dar início ao desenvolvimento a partir de agora é um app para uma transportadora fictícia, o FastFeet.

Nesta aplicação foi utilizado todos os conceitos estudados no GoStack, BootCamp realizado pela RocketSeat. Este projeto está
segmentado em 4 partes que serão desenvolvidas ao longo do curso, visando formar uma aplicação completa com, BackEnd, FrontEnd
e Mobile, sendo está o começo do BackEnd.

### **Um pouco sobre as ferramentas**
Para o desenvolmento desta aplicação as seguintes ferramentas foram utilizadas:

  - NodeJS
  - Express
  - Docker
  - PostGres
  - Sequelize
  - Sucrase
  - Yarn
  - EsLint
  - Prettier
  
  
  ### **Conceitos**
  
  - Arquitetura MVC
  - Autenticação JWT (JavaScript Web Token)
  - ORM
  - Migrations
  - Seeds
  - Validação de Dados com Yup

### **1. Autenticação**

A rota /session é utilizada para realizar a autenticação:

Ela espera um JSON, que deve conter email e senha, ambos obrigatórios,
Após isso a autenticação é realizada utilizando o JWT, assim gerando o token de autenticidade unico para cada sessão.

### 2. Gestão de destinatários

Apenas usuários autenticados podem realizar o cadastro e atualização de destinatários

Através do método POST na rota /recipient é possivel o armazenamento de destinatários:

Está rota espera os seguintes parametros: **nome**, **rua**, **número**, **complemento**, **estado**, **cidade** e **CEP**.
Assim como na autenticação esses parametros são obrigatórios.


Através do método PUT na rota /recipient/:id é possivel a atualização de destinatários:

Está rota esperá apenas os parametros que o usuário deseja atualizar


### Instalação de Dependencias

```sh
git clone...
cd goStack_desafio-02
yarn
```

### Inicialização do Banco de Dados

```sh
mkdir nome_desejavel
docker run -it -p 5432:5432 postgres
```

### Criação das Migrations e do Usuário Admin

```sh
yarn sequelize db:migrate
yarn sequelize db:seed:all
```

### Subir Aplicação

```sh
yarn dev
```

### Subir a Aplicação em Modo Debug

```sh
yarn dev:debug
```


  
  
  
