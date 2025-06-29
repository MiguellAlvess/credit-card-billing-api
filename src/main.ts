import CalculateInvoiceUseCase from '../src/layers/application/use-cases/calculate-invoice'
import GetTransactionsDAODatabase from './layers/infra/daos/get-transactions-dao-database'
import CurrencyGatewayHttp from './layers/infra/gateway/currency-gateway-http'
import AxiosAdapter from './layers/infra/http/axios-adapter'

import { PrismaAdapter } from './layers/infra/database/prisma-adapter'
import InvoiceController from './layers/infra/controller/invoice-controller'
import { ExpressAdapter } from './layers/infra/http/express-adapter'

const databaseClient = new PrismaAdapter()
const getTransactionsDAO = new GetTransactionsDAODatabase(databaseClient)
const httpClient = new AxiosAdapter()
const baseUrl = 'http://localhost:3001'
const currencyGateway = new CurrencyGatewayHttp(httpClient, baseUrl)
const calculteInvoice = new CalculateInvoiceUseCase(
    getTransactionsDAO,
    currencyGateway,
)
const httpServer = new ExpressAdapter()
new InvoiceController(httpServer, calculteInvoice)
httpServer.listen(8080)
