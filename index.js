const express = require('express')

const app = express()

const PORT = 4000

app.get('/', (req, res) => {
    res.send('Hello world! 🐻')
})

app.listen(PORT, () => {
    console.log(`port ${PORT} says 🎶 hello darkness my old friend🎶`)
})

app.get('/add/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x + y}`)
})    

app.get('/subtract/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x - y}`)
})

app.get('/multiply/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x * y}`)
})

app.get('/divide/:x/:y', (req, res) => {
    const x = parseInt(req.params.x)
    const y = parseInt(req.params.y)
    res.send(`${x / y}`)
})

