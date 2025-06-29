export interface GetTransactionsDAO {
    execute(cardNumber: string, month: number, year: number): Promise<any>
}
