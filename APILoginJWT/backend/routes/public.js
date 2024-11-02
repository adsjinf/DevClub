import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET

// Cadastro usuário
router.post('/cadastro', async (req, res) => {
    try {
        const user = req.body
        // nivel de seguraça de cryptação
        const salt = await bcrypt.genSalt(10)
        // hashed da senha incryptado
        const hashedPassword = await bcrypt.hash(user.password, salt)

        const userDB = await prisma.userLogin.create({
            data: {
                email: user.email,
                name: user.name,
                password: hashedPassword
            } 
        })
    
        res.status(201).json(userDB)
    }
    catch(err) {
        res.status(500).json({message: "Erro no Servidor, tente novamente."})
    }
})

// Login Usuario
router.post('/login', async (req, res) => {
    try {
        const userInfo = req.body
 
        // Busca o usuário no banco de dados
        const user = await prisma.userLogin.findUnique({
             where : { email: userInfo.email},
        })
        
        // Verifica se o usuaário existe dentro do banco de dados
        if(!user) {
            return res.status(404).json({message: "Usuário não encontrado."})
        }

        // Verifica se a senha informa e a senha do banco são iguais
        const isMatch = await bcrypt.compare(userInfo.password, user.password)
        if(!isMatch) {
            return res.status(400).json({message: "Senha inválida."})
        }
        // Gerar o token JWT
        const token = jwt.sign({id: user.id}, JWT_SECRET, {expiresIn: '7d'})

        // Retorna um toker para o usuarios
        res.status(200).json(token)
        
    }
    catch(err) {
        res.status(500).json({message: "Erro no Servidor, tente novamente."})
    }
})


export default router