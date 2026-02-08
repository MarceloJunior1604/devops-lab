const express = require ('express');

const app = express();

app.get('/health', (req, res) => {
    res.send('OK');
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})