import express from 'express';
import bodyParser from 'body-parser';
import bd from './config/connection.js';
import bibliotecaRouter from './routes/biblioteca_routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', bibliotecaRouter);

bd.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Banco de dados rodando na porta ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Erro acessar banco de dados:', error);
    });
console.log("porta 3000 - server");