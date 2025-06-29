import CalculateInvoiceUseCase from '../../application/use-cases/calculate-invoice'
import HttpServer from '../http/http-server'

export default class InvoiceController {
    constructor(
        readonly httpServer: HttpServer,
        readonly calculateInvoiceUseCase: CalculateInvoiceUseCase,
    ) {
        httpServer.register(
            'get',
            '/cards/:cardNumber/invoices',
            async (params: any, body: any) => {
                const total = await this.calculateInvoiceUseCase.execute(
                    params.cardNumber,
                )
                return total
            },
        )
    }
}
