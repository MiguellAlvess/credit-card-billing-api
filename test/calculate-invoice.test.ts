import CalculateInvoiceUseCase from '../src/layers/application/calculate-invoice'

describe('Calculate Invoice Use Case', () => {
    test('should calculate invoice', async () => {
        const sut = new CalculateInvoiceUseCase()
        const total = await sut.execute('1234')
        expect(total).toBe(1050)
    })
})
