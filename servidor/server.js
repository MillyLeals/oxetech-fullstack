const express = require('express');
const app = express();

app.use(express.json());

function validarProduto(req, res, next) {
    const { nome, preco } = req.body;
    if (!nome || nome.trim() === "") {
        return res.status(400).json({ erro: "O nome do produto é obrigatório" });
    }
    if (typeof preco !== "number" || preco <= 0) {
        return res.status(400).json({ erro: "Preço inválido. Informe um número maior que zero." });
    }

    next();
}

app.get('/status', (req, res) => {
    return res.json({
        status: "Servidor OK"
    })
});

app.post('/saudacao', (req, res) => {
    const { nome } = req.body;
    return res.json({
        mensagem: `Olá, ${nome}`
    });
});

app.post('/produtos', validarProduto, (req, res) => {
    return res.json({
        mensagem: "Produto Cadastrado",
        produto: req.body
    });
});

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
});