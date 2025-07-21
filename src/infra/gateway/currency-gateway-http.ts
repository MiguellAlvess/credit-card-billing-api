import CurrencyGateway from '../../application/ports/currency-gateway'
import HttpClient from '../http/http-client'

export default class CurrencyGatewayHttp implements CurrencyGateway {
    constructor(
        readonly httpClient: HttpClient,
        readonly baseUrl: string,
    ) {}
    async getCurrencies(): Promise<any> {
        const currencies = await this.httpClient.get(
            `${this.baseUrl}/currencies`,
        )

        return currencies
    }
}
