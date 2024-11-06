/*
const https = require('https');
const fs = require('fs');
const express = require('express');
*/
import express from 'express';
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'

import auth from './middlewares/auth.js'


const app = express()
app.use(express.json())

////////////////////////////////////////////////
// Testa comunicaçã com servidor
////////////////////////////////////////////////

app.get('/ping', (req, res) => {
    res.send('pong')
})


app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)

app.listen(3000, () => console.log("Servidor Rodando 🚀"))


/* 3 Rotas
    Cadastrar, Login, Listar Usuários

    Públicas
        Cadastro e Login

    Privadas
        Listar Usuários
*/
