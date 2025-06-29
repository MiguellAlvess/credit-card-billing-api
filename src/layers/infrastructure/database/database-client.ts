import { Prisma } from '@prisma/client'

export interface DatabaseClient {
    cardTransaction: {
        findMany(params: Prisma.CardTransactionFindManyArgs): Promise<any>
    }
}
