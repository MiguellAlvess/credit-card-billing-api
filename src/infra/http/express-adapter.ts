import HttpServer from './http-server'
import express from 'express'

export class ExpressAdapter implements HttpServer {
    app: any
    constructor() {
        this.app = express()
    }
    async register(
        method: string,
        url: string,
        callback: Function,
    ): Promise<void> {
        this.app[method](url, async function (req: any, res: any) {
            const output = await callback(req.params, req.body)
            res.json(output)
        })
    }

    async listen(port: number): Promise<void> {
        return this.app.listen(port)
    }
}
