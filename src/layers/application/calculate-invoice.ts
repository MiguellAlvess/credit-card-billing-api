import { TransactionNotFoundError } from '../../errors/transaction'
import Invoice from '../domain/entities/invoice'
import { GetTransactionsDAO } from '../resources/ports/daos/get-transactions-dao'
import CurrencyGateway from '../resources/ports/gateway/currency-gateway'

export default class CalculateInvoiceUseCase {
    constructor(
        readonly getTransactionsDAO: GetTransactionsDAO,
        readonly currencyGateway: CurrencyGateway,
    ) {}

    async execute(cardNumber: string) {
        const today = new Date()
        const month = today.getMonth() + 1
        const year = today.getFullYear()
        const currencies = await this.currencyGateway.getCurrencies()
        const transactions = await this.getTransactionsDAO.execute(
            cardNumber,
            month,
            year,
        )
        if (!transactions) {
            throw new TransactionNotFoundError()
        }
        const invoice = new Invoice(transactions, currencies)
        const total = invoice.getTotal()
        return total
    }
}
