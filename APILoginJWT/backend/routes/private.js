import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.get('/listar-usuarios', async (req, res) => {
    try {
        const users = await prisma.userLogin.findMany({
            select: {
                id: true,         // Coloque aqui os campos que você deseja incluir
                name: true,
                email: true
                // O campo password não deve ser incluído
            }
        })
        res.status(200).json({message: "Usuarios Listados com Sucesso", users})
    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Falha no servidor'})
    }
})

export default router