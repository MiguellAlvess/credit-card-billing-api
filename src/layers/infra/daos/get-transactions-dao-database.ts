import { DatabaseClient } from '../database/database-client'
import { GetTransactionsDAO } from '../../application/ports/get-transactions-dao'

export default class GetTransactionsDAODatabase implements GetTransactionsDAO {
    constructor(readonly databaseClient: DatabaseClient) {}

    async execute(
        cardNumber: string,
        month: number,
        year: number,
    ): Promise<any> {
        const transactions = await this.databaseClient.cardTransaction.findMany(
            {
                where: {
                    card_number: cardNumber,
                    date: {
                        gte: new Date(year, month - 1, 1),
                        lt: new Date(year, month, 1),
                    },
                },
            },
        )

        return transactions
    }
}
