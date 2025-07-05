import express from 'express'

const app = express()

const users = []

app.post('/usuarios', (req, res) => {
    console.log(req)

    res.send('Ok request')
})

app.get('/usuarios', (req, res) => {

    res.send('Tá dando bom aqui')
})


app.listen(3001)