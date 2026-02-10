const express = require ('express');

const app = express();

app.get('/health', (req, res) => {
    res.send('OK');
});

const PORT = process.env.PORT || 30000;

app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000')
});