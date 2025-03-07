import express from 'express';
import { Express } from 'express';
import { startup } from '../cli/Startup';

export class Aplication {
    Server: Express
    private port: number

    constructor(port: number) {
        this.port = port;
        this.Server = express();
    }

    public startServer() {
        this.Server.listen(this.port, () => {
            startup(this.port);
        })
    }
}
