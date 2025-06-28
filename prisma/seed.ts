import prisma from './prisma'

async function main() {
    await prisma.cardTransaction.createMany({
        data: [
            {
                card_number: '1234',
                description: 'Mercado Livre',
                amount: 100,
                currency: 'BRL',
                date: new Date('2025-06-01T10:00:00Z'),
            },
            {
                card_number: '1234',
                description: 'Amazon',
                amount: 300,
                currency: 'USD',
                date: new Date('2025-06-02T15:30:00Z'),
            },
            {
                card_number: '1234',
                description: 'Submarino',
                amount: 50,
                currency: 'BRL',
                date: new Date('2025-06-03T12:00:00Z'),
            },
            {
                card_number: '1234',
                description: 'Extra',
                amount: 100,
                currency: 'BRL',
                date: new Date('2025-10-04T20:00:00Z'),
            },
            {
                card_number: '1234',
                description: 'Google',
                amount: 1000,
                currency: 'BRL',
                date: new Date('2025-10-04T20:00:00Z'),
            },
        ],
    })
    console.log('Seed completed successfully')
}

main()
    .catch((e) => {
        console.error(e)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
