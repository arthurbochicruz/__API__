import express from 'express'



const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (req, res) => {
    users.push(req.body)

    res.send('Ok, aqui deu certo')
    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.json(users)
    res.status(200).json(users)
})


app.listen(3001)
