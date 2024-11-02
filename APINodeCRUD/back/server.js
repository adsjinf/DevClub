import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json());

////////////////////////////////////////////////
// Testa comunicaçã com servidor
////////////////////////////////////////////////

app.get('/ping', (req, res) => {
    res.send('pong')
})

////////////////////////////////////////////////
// Usuario
////////////////////////////////////////////////

// Rota para incluir um usuario
app.post('/usuario', async (req, res) => {

    try {
        const user = await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        });
        res.status(201).json(user);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).send({ error: 'Erro ao criar usuário' });
    }
});

// Rota para alterar um usuario
app.put('/alteradadosusuario/:id', async (req, res) => {

    try {
        const user = await prisma.user.update({
            where: {
                id: req.params.id,
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })
        res.status(200).json(user);
    } catch (error) {
        console.error('Erro ao alterar dados do  usuário:', error);
        res.status(500).send({ error: 'Erro ao alterar dados do usuário' });
    }
});

// Rota para deletar um usuario
app.delete('/deletarusuario/:id', async (req, res) => {
    
    const userId = req.params.id; // Captura o id da requisição

    try {
        await prisma.user.delete({
            where: {
                id: req.params.id,
            },
        })
        res.status(200).json({ message: "Usuário com id " + userId + " deletado com sucesso!" });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).send({ error: 'Erro ao deletar usuário' });
    }
});

// Rota para incluir uma lista de usuários
app.post('/usuarios', async (req, res) => {
    const usersList = req.body; // lista de usuários

    try {
        const createdUsers = [];
        for (const userData of usersList) {
            const useritem = await prisma.user.create({
                data: {
                    email: userData.email,
                    name: userData.name,
                    age: userData.age
                }
            });
            createdUsers.push(useritem);
        }
        res.status(201).json({ message: 'Usuários adicionados com sucesso', users: createdUsers });
    } catch (error) {
        console.error('Erro ao criar usuários:', error);
        res.status(500).send({ error: 'Erro ao criar usuários' });
    }
});

// Rota para solicitar dados cadastrados
app.get('/listausuarios', async (req, res) => {
    let users = [];
    try {
        const filters = {};
        if (req.query.email) {
            filters.email = req.query.email;
        }
        if (req.query.name) {
            filters.name = req.query.name;
        }
        if (req.query.age) {
            // Converte `age` de String para Int
            filters.age = parseInt(req.query.age, 10);
            if (isNaN(filters.age)) {
                return res.status(400).send({ error: 'A idade fornecida não é um número válido.' });
            }
        }
        users = await prisma.user.findMany({
            where: filters
        });
        res.status(200).json(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).send({ error: 'Erro ao buscar usuários' });
    }
});

////////////////////////////////////////////////
// Produto
////////////////////////////////////////////////

// para incluir um produto
app.post('/produto', async (req, res) => {

    try {
        const produto = await prisma.produto.create({
            data: {
                name: req.body.name,
                estoque: req.body.estoque,
                estoqueMinimo: req.body.estoqueminimo
            }
        });
        res.status(201).json(produto);
    } catch (error) {
        console.error('Erro ao criar produto:', error);
        res.status(500).send({ error: 'Erro ao criar produto' });
    }
});

// Rota para alterar um usuario
app.put('/alteradadosproduto/:id', async (req, res) => {

    try {
        const produto = await prisma.produto.update({
            where: {
                id: req.params.id,
            },
            data: {
                name: req.body.name,
                estoque: req.body.estoque,
                estoqueMinimo: req.body.estoqueminimo
            }
        })
        res.status(200).json(produto);
    } catch (error) {
        console.error('Erro ao alterar dados do  produto:', error);
        res.status(500).send({ error: 'Erro ao alterar dados do produto' });
    }
});

// Rota para deletar um produto
app.delete('/deletarproduto/:id', async (req, res) => {
    
    const produtoId = req.params.id; // Captura o id da requisição

    try {
        await prisma.produto.delete({
            where: {
                id: req.params.id,
            },
        })
        res.status(200).json({ message: "Produto com id " + produtoId + " deletado com sucesso!" });
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).send({ error: 'Erro ao deletar produto' });
    }
});

// Rota para incluir uma lista de produtos
app.post('/produtos', async (req, res) => {
    const produtosList = req.body; // lista de produto
    try {
        const createdProdutos = [];
        for (const produtoData of produtosList) {
            const produtoitem = await prisma.produto.create({
                data: {
                    name: produtoData.name,
                    estoque: produtoData.estoque,
                    estoqueMinimo: produtoData.estoqueminimo
                }
            });
            createdProdutos.push(produtoitem);
        }
        res.status(201).json({ message: 'Usuários adicionados com sucesso', produto: createdProdutos });
    } catch (error) {
        console.error('Erro ao criar Produtos:', error);
        res.status(500).send({ error: 'Erro ao criar Produtos' });
    }
});


// Rota para solicitar dados cadastrados
app.get('/listaprodutos', async (req, res) => {
    let produtos = [];
    try {
        const filters = {};
        if (req.query.name) {
            filters.name = req.query.name;
        }
        if (req.query.estoque) {
            filters.estoque = parseInt(req.query.estoque, 10)
            if (isNaN(filters.estoque)) {
                return res.status(400).send({ error: 'O estoque fornecido não é um número válido.' });
            }
        }
        produtos = await prisma.produto.findMany({
            where: filters
        });
        res.status(200).json(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).send({ error: 'Erro ao buscar produtos' });
    }
});

app.listen(3000);

/* 
    1) Tipo de Rota / Metodo HTTP (GET-Lista, PUT-Cria, POST-Edita Vário, PATCH-Edita um, DELETE-Deletar)
    2) Endereço
*/

/*
    Missões:
    - Criar API de Usuários
        . Criar um usuário
        . Listar todos os usuários
        . Editar um usuário
        . Deletar um usuário
*/

/* 
    banco de dados MongoDB
    usuario: root
    senha: 123456
    banco de dados: APINodeCRUD
*/