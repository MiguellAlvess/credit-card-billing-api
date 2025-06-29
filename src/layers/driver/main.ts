import express from 'express'
import 'dotenv/config'
import CalculateInvoiceUseCase from '../application/calculate-invoice'
import GetTransactionsDAODatabase from '../resources/adapters/daos/get-transactions-dao-database'
import CurrencyGatewayHttp from '../resources/adapters/gateway/currency-gateway-http'

const app = express()

app.get('/cards/:cardNumber/invoices', async (req, res) => {
    const getTransactionsDAO = new GetTransactionsDAODatabase()
    const currencyGateway = new CurrencyGatewayHttp()
    const calculteInvoice = new CalculateInvoiceUseCase(
        getTransactionsDAO,
        currencyGateway,
    )
    const total = await calculteInvoice.execute(req.params.cardNumber)
    res.json({
        total,
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server runing on port ${process.env.PORT}`)
})
