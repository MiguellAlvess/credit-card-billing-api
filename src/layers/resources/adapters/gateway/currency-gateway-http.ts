import axios from 'axios'
import CurrencyGateway from '../../ports/gateway/currency-gateway'

export default class CurrencyGatewayHttp implements CurrencyGateway {
    async getCurrencies(): Promise<any> {
        const response = await axios.get(`http://localhost:3001/currencies`)
        const currencies = response.data

        return currencies
    }
}
