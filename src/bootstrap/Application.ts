import express from 'express';
import { Express } from 'express';

export class Aplication {
    Server: Express
    private port: number

    constructor(port: number) {
        this.port = port;
        this.Server = express();
    }

    public startServer() {
        this.Server.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }
}
