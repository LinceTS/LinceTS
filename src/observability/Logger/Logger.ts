/**
 * Observability/Logger/main.ts
 *
 * @description This file contains the core logic of beehive loggin service.
 *
 * @author Anchel Ascaso Castro
 * @created 2025-03-13
 * @modified 2025-03-13
 * @version 0.0.1
 *
 */
import { Express } from "express";
import chalk from "chalk";
import { version } from "../../../package.json"; // Importa la versión desde package.json

//This interface represents a log row
export interface Logg {
    // Type of Log
    Type: string;
    // version of framework for internal services
    version: string;
    // Dato of logg
    Date: Date;
    // Where the event happened inside the server
    Position: String;
    // Description
    Context: string;
    // Time it takes!
    delay: number;
}

export class Logger {
    private Logs: Array<Logg> = [];

    public static startLogging(server: Express): void {
        server.use((req, res, next) => {
            const start = Date.now();
            res.on("finish", () => {
                const delay = Date.now() - start;
                const log: Logg = {
                    Type: "Request",
                    version: version,
                    Date: new Date(),
                    Position: `${req.method} ${req.url}`,
                    Context: `Status: ${res.statusCode}`,
                    delay: delay
                };

                console.log(this.getRequestMessague(log));
            });
            next();
        })
    }

    public static getRequestMessague(log: Logg): string {
        switch(log.Type) {
            case "Request":
                // Extraer el código de estado numérico para determinar el color
                const statusCode = parseInt(log.Context.replace("Status: ", ""));

                // Determinar el color según el rango del código de estado
                let beehiveLogo;

                if (statusCode >= 100 && statusCode < 200) {
                    // Respuestas informativas (1xx) - Azul claro
                    beehiveLogo = chalk.black.bgYellow.bold(" LINCE ");
                } else if (statusCode >= 200 && statusCode < 300) {
                    // Respuestas exitosas (2xx) - Verde
                    beehiveLogo = chalk.white.bgGreen.bold(" LINCE ");
                } else if (statusCode >= 300 && statusCode < 400) {
                    // Redirecciones (3xx) - Amarillo
                    beehiveLogo = chalk.white.bgBlue.bold(" LINCE ");
                } else if (statusCode >= 400 && statusCode < 500) {
                    // Errores del cliente (4xx) - Rojo
                    beehiveLogo = chalk.white.bgRed.bold(" LINCE ");
                } else if (statusCode >= 500 && statusCode < 600) {
                    // Errores del servidor (5xx) - Magenta
                    beehiveLogo = chalk.white.bgMagenta.bold(" LINCE ");
                } else {
                    // Por defecto o código desconocido - Azul
                    beehiveLogo = chalk.white.bgBlue.bold(" LINCE ");
                }

                return `${beehiveLogo}${chalk.blue.bgWhite.bold(
                    " v" + version + " "
                )} [${chalk.green(log.Date.toISOString())}] ${chalk.yellow(
                    log.Type
                )} - ${chalk.cyan(log.Position)} - ${chalk.magenta(
                    log.Context
                )} - ${chalk.red(`${log.delay}ms`)}`;

            default:
                // Para otros tipos de logs, mantener el color azul por defecto
                return`${chalk.white.bgBlue.bold(' BEEHIVE ')}${chalk.blue.bgWhite.bold(" v"+version+" ")} [${chalk.green(log.Date.toISOString())}] ${chalk.yellow(log.Type)} - ${chalk.cyan(log.Position)} - ${chalk.magenta(log.Context)} - ${chalk.red(`${log.delay}ms`)}`;
        }
    }
}
