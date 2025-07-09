import express from 'express'
import prisma from './generated/prisma/index.js';
import { PrismaClient } from './generated/prisma'
 

const prisma = new PrismaClient()



const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', async (req, res) => {

       await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })

    res.status(201).json(req.body) 

})

app.get('/usuarios', (req, res) => {
    res.json(users)
    res.status(200).json(users)
})


app.listen(3001)
