import express from 'express'

const app = express()

app.get('/usuarios', (req, res) => {
    res.send('Tá dando bom aqui')
})

app.listen(3001)