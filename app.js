const express = require('express');
const app = express();

app.listen(8081, () => {
    console.log('Servidor rodando na porta 8081');
});

app.get('/', (req, res) => {
    res.send('Oii, mundo!');
});

app.get('/cadastrar/:item/:quantidade', (req, res) => {
    res.send('Pag de cadastro - Item: ' + req.params.item + ' - Quantidade: ' + req.params.quantidade);
});

app.get('/contato', (req, res) => {
    res.send('Pag de contato');
});