import express from 'express';
import { Express } from 'express';
import { BeehiveCore } from '../core/Core';

export class Aplication {
    Server: Express
    port: number

    constructor(port: number) {
        this.port = port;
        this.Server = express();
        this.Server.use(express.json())
    }

    public startServer() {
        this.Server.listen(this.port, () => {
            BeehiveCore.Startup();
        })
    }

}
