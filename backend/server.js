const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({ "msg": "Rota Inicial" })
})

const PORT = 3333
app.listen(PORT, () => {
    console.log(`🚀 Server is runing in http://localhost:${PORT}`)
})