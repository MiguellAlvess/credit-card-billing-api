import type { Config } from 'jest'

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.ts'],
    testMatch: ['**/test/**/*.test.ts'],
}

export default config
