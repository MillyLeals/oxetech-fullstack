# API Express - Validação de Produtos

Este projeto foi desenvolvido com Node.js e Express, com foco em criação de rotas e validação de dados utilizando middlewares.

# Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* Nodemon

# Como executar o projeto

## 1. Instalando dependências

```bash
yarn install
```

## 2. Rodando o servidor em modo desenvolvimento

```bash
yarn dev
```

O servidor será iniciado em:

```
http://localhost:3333
```

# Rotas disponíveis

# GET /status

Retorna o status do servidor.

**Resposta:**

```json
{
  "status": "Servidor OK"
}
```

# POST /saudacao

Envia um nome e recebe uma saudação.

**Body:**

```json
{
  "nome": "Andreza"
}
```

**Resposta:**

```json
{
  "mensagem": "Olá, Andreza"
}
```

# POST /produtos

Cria um produto com validação via middleware.

**Body:**

```json
{
  "nome": "Notebook",
  "preco": 3500
}
```

# Regras de validação:

* Nome não pode estar vazio
* Preço deve ser um número maior que zero

**Resposta:**

```json
{
  "mensagem": "Produto Cadastrado",
  "produto": {
    "nome": "Notebook",
    "preco": 3500
  }
}
```

# Aprendizados

* Criação de servidor com Express
* Rotas GET e POST
* Uso de `req.body`
* Middlewares de validação
* Status HTTP 400 para erros


# Autora

Desenvolvido por Andreza Leal
