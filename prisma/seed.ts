import prisma from './prisma'

async function main() {
    await prisma.cardTransaction.createMany({
        data: [
            {
                card_number: '1111 2222 3333 4444',
                description: 'Mercado Livre',
                amount: 100,
                currency: 'BRL',
                date: new Date('2025-06-01T10:00:00Z'),
            },
            {
                card_number: '5555 6666 7777 8888',
                description: 'Amazon',
                amount: 300,
                currency: 'USD',
                date: new Date('2025-06-02T15:30:00Z'),
            },
            {
                card_number: '9999 0000 1111 2222',
                description: 'Submarino',
                amount: 50,
                currency: 'BRL',
                date: new Date('2025-06-03T12:00:00Z'),
            },
            {
                card_number: '3333 4444 5555 6666',
                description: 'Extra',
                amount: 100,
                currency: 'BRL',
                date: new Date('2025-10-04T20:00:00Z'),
            },
            {
                card_number: '1111 2222 5555 8888',
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
