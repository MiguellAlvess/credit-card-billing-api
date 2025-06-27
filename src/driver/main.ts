import express from 'express'
import 'dotenv/config'

const app = express()

app.get('/cards/:cardNumber/invoices', (req, res) => {
    res.json({
        total: 1000,
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server runing on port ${process.env.PORT}`)
})
