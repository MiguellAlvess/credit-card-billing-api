export class TransactionNotFoundError extends Error {
    constructor() {
        super(`Transactions not found`)
        this.name = 'TransactionNotFoundError'
    }
}
