import express from 'express'
//import prisma from './generated/prisma/index.js';
import { PrismaClient } from './generated/prisma/index.js'
 

const prisma = new PrismaClient()



const app = express()
app.use(express.json())


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
app.put('/usuarios/:id', async (req, res) => {
        
       await prisma.user.update({
        where: {
            id: req.params.id
        },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age
            }
        })

    res.status(201).json(req.body) 

})

app.get('/usuarios', async (req, res) => {

    const users = await prisma.user.findMany()
    res.json(users)
    res.status(200).json(users)
})

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }

    })
    res.status(200).json({message: 'Usuario Deletado Com Sucesso'}) 
})


app.listen(5001)
