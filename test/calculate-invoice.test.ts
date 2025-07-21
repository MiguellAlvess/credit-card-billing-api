import CurrencyGateway from '../src/application/ports/currency-gateway'
import { GetTransactionsDAO } from '../src/application/ports/get-transactions-dao'
import CalculateInvoiceUseCase from '../src/application/use-cases/calculate-invoice'

describe('Calculate Invoice Use Case', () => {
    test('should calculate invoice', async () => {
        const getTransactionsDAO: GetTransactionsDAO = {
            async execute(
                cardNumber: string,
                month: number,
                year: number,
            ): Promise<any> {
                return [
                    { amount: 100, currency: 'BRL' },
                    { amount: 1000, currency: 'BRL' },
                    { amount: 600, currency: 'USD' },
                ]
            },
        }

        const currencyGateway: CurrencyGateway = {
            async getCurrencies(): Promise<any> {
                return { usd: 2 }
            },
        }

        const sut = new CalculateInvoiceUseCase(
            getTransactionsDAO,
            currencyGateway,
        )

        const output = await sut.execute('1234')
        expect(output.total).toBe(2300)
    })
})
