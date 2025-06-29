import express from 'express'

const app = express()

app.get('/currencies', (req, res) => {
    res.json({
        usd: 3,
    })
})

app.listen(3001, () => {
    console.log('Server running on port 3001')
})
