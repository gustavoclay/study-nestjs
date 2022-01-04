const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/puc', (req, res) => {
    res.send('PUC MINAS!')
})

app.post('/', (req, res) => {
    res.send('POST Hello World!')
})

app.put('/', (req, res) => {
    res.send('PUT Hello World!')
})

app.patch('/', (req, res) => {
    res.send('PATCH Hello World!')
})

app.delete('/', (req, res) => {
    res.send('DELETE Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
