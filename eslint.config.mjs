import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
})

export default [
    ...compat.config({
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended',
        ],
    }),
    {
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
        },
    },
]
