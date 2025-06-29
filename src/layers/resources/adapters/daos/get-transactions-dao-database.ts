import prisma from '../../../../../prisma/prisma'
import { Prisma } from '@prisma/client'
import { GetTransactionsDAO } from '../../ports/daos/get-transactions-dao'

export default class GetTransactionsDAODatabase implements GetTransactionsDAO {
    async execute(
        cardNumber: string,
        month: number,
        year: number,
    ): Promise<
        Array<{
            amount: Prisma.Decimal
            currency: string
        }>
    > {
        const transactions = await prisma.cardTransaction.findMany({
            where: {
                card_number: cardNumber,
                date: {
                    gte: new Date(year, month - 1, 1),
                    lt: new Date(year, month, 1),
                },
            },
        })

        return transactions
    }
}
