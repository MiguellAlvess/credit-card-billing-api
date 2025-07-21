export default class Invoice {
    constructor(
        readonly transactions: any,
        readonly currencies: any,
    ) {}

    getTotal() {
        let total = 0
        for (const transaction of this.transactions) {
            if (transaction.currency === 'BRL') {
                total += transaction.amount
            }
            if (transaction.currency === 'USD') {
                total += transaction.amount * this.currencies.usd
            }
        }
        return total
    }
}
