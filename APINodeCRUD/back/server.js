import express from 'express';

/* 
    1) Tipo de Rota / Metodo HTTP (GET-Lista, PUT-Cria, POST-Edita Vário, PATCH-Edita um, DELETE-Deletar)
    2) Endereço
*/

const app = express();

app.get('/usuarios', (req, res) => {
    res.send('Comunicação OK!');
})

app.listen(3000)