import CalculateInvoiceUseCase from '../src/layers/application/calculate-invoice'
import CurrencyGateway from '../src/layers/resources/ports/gateway/currency-gateway'
import { GetTransactionsDAO } from '../src/layers/resources/ports/daos/get-transactions-dao'

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

        const total = await sut.execute('1234')
        expect(total).toBe(2300)
    })
})
