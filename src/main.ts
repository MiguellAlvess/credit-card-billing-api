import CalculateInvoiceUseCase from './application/use-cases/calculate-invoice'
import InvoiceController from './infra/controller/invoice-controller'
import GetTransactionsDAODatabase from './infra/daos/get-transactions-dao-database'
import { PrismaAdapter } from './infra/database/prisma-adapter'
import CurrencyGatewayHttp from './infra/gateway/currency-gateway-http'
import AxiosAdapter from './infra/http/axios-adapter'
import { ExpressAdapter } from './infra/http/express-adapter'

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
