
# API Events

Tabela de conteúdos
=================
   * [Tabela de Conteúdos](#tabela-de-conteúdos)
   * [Descrição do projeto](#descrição-do-projeto)
   * [Status do projeto](#status-do-projeto)
   * [Features](#features)
   * [Como usar](#como-usar)
      * [Pré-Requisitos](#pré-requisitos)
      * [Rodando localmente](#rodando-localmente)
	  * [Rodando em produção](#rodando-em-produção)
   * [Tecnologias](#tecnologias)
   * [Autor](#autor)
   * [Changelog](#changelog)
   * [Licença](#licença)

## Descrição do projeto

<p>Este serviço tem como principal objetivo cadastrar e listar eventos.  </p>


## Status do projeto

<h4> 🚧  🚀 Em constante construção...  🚧 </h4>


## Features

- [x] Cadastrar um novo evento;
- [x] Listar todos os eventos salvos.


## Como usar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com) e [Node.js](https://nodejs.org). 

Além disto, é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### Rodando localmente

```bash
# Clone este repositório
$ git clone <https://github.com/albertolemos/api-events.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd api-events

# Instale as dependências
$ yarn

# Subindo a aplicação
$ yarn dev

```

### Rodando em produção

#### Obter status da API

#### Request

`GET /`

	curl --location --request GET 'https://events-api-alberto.herokuapp.com/'

#### Response

    {
		"version": "0.0.1",
		"online": true
	}

### Criar novo evento.

#### Request

`POST /event`

    curl --location --request POST 'https://events-api-alberto.herokuapp.com/event' \
	--form 'name="Voz e Violão - Nando Reis"' \
	--form 'category="show"' \
	--form 'date="21/01/2022"' \
	--form 'hour="21:30"' \
	--form 'organizer="Teatro Guararapes"' \
	--form 'ticketLots="vip"' \
	--form 'image=@"/D:/Downloads/nando-reis.webp"'

#### Response

    {
		"type": "success",
		"message": "Data saved successfully.",
		"id": "61af9509404c4912a5d157a4"
	}

### Obter eventos salvos

#### Request

`GET /event`

	curl --location --request GET 'https://events-api-alberto.herokuapp.com/event'

#### Response

    [
		{
			"_id": "61af9509404c4912a5d157a4",
			"name": "VOZ E VIOLÃO - NANDO REIS",
			"category": "show",
			"date": "21/01/2022",
			"hour": "21:30",
			"imageUrl": "https://storage.googleapis.com/api-evento.appspot.com/1638896904654.webp",
			"organizer": "Teatro Guararapes",
			"ticketLots": "vip",
			"createdAt": "2021-12-07T17:08:25.326Z",
			"updatedAt": "2021-12-07T17:08:25.326Z",
			"__v": 0
		}
	]

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org)
- [Express](https://expressjs.com/)
- [Firebase](https://firebase.google.com/)
- [MongoDB](https://www.mongodb.com/)


## Autor

<a href="https://github.com/albertolemos" title="Alberto Lemos"> <sub><b>Alberto Lemos</b></sub> 🚀</a>


### Feito por Alberto Lemos 👋🏽 Entre em contato!

[![Gmail Badge](https://img.shields.io/badge/-albertolemos@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:albertolemos@gmail.com)](mailto:albertolemos@gmail.com)



## Changelog

- 0.0.1 - 07/12/2021 - Primeira versão:


## Licença

[MIT](LICENSE)
