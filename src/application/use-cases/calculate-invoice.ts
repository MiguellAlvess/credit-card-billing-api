import Invoice from '../../domain/entities/invoice'
import CurrencyGateway from '../ports/currency-gateway'
import { GetTransactionsDAO } from '../ports/get-transactions-dao'

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
        const invoice = new Invoice(transactions, currencies)
        const total = invoice.getTotal()
        return {
            total,
        }
    }
}
