import { PrismaClient } from '@prisma/client'
import { DatabaseClient } from './database-client'

export class PrismaAdapter implements DatabaseClient {
    public cardTransaction

    constructor(private readonly prisma = new PrismaClient()) {
        this.cardTransaction = prisma.cardTransaction
    }
}
