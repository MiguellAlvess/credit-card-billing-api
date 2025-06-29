import express from 'express'
import 'dotenv/config'
import CalculateInvoiceUseCase from '../application/calculate-invoice'
import GetTransactionsDAODatabase from '../resources/adapters/daos/get-transactions-dao-database'
import CurrencyGatewayHttp from '../resources/adapters/gateway/currency-gateway-http'
import AxiosAdapter from '../infra/http/axios-adapter'

import { PrismaAdapter } from '../infra/database/prisma-adapter'

const app = express()

app.get('/cards/:cardNumber/invoices', async (req, res) => {
    const databaseClient = new PrismaAdapter()
    const getTransactionsDAO = new GetTransactionsDAODatabase(databaseClient)
    const httpClient = new AxiosAdapter()
    const baseUrl = 'http://localhost:3001'
    const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl)
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
