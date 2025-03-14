import { Express } from 'express';
import "reflect-metadata";
import { EntitiesControll } from '../EntitiesControl';
import chalk from "chalk";

export function createEndpoints(Server: Express) {
    //console.log(EntitiesControll.RoutesMethods);
    EntitiesControll.RoutesMethods.forEach(method => {
        switch(method.HttpMethod){
            case "GET":
                createGetEndPoint(Server, method.FullPath, method.MethodName, method.Instance);
                break;
            case "PUT":
                createPutEndPoint(Server, method.FullPath, method.MethodName, method.Instance);
                break;
            case "POST":
                createPostEndPoint(Server, method.FullPath, method.MethodName, method.Instance);
                break;
            case "PATCH":
                createPachEndPoint(Server, method.FullPath, method.MethodName, method.Instance);
                break;
            case "DELETE":
                createDeleteEndPoint(Server, method.FullPath, method.MethodName, method.Instance);
                break;
            case "UPDATE":
                createUpdateEndPoint(Server, method.FullPath, method.MethodName, method.Instance);
                break;
        }
    })
}

function createGetEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    //console.log(chalk.blue(`GET Route Created and listening at:  ${FullPath}`));
    Server.get(FullPath, (req, res) => {
        const result = ClassInstance[MethodName](req.params);
        //console.log(req.params);
        res.send(result);
    });
}

function createPostEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    //console.log(chalk.blue(`POST Route Created and listening at:  ${FullPath}`));

    Server.post(FullPath, (req, res) => {
        const result = ClassInstance[MethodName](req.params);
        res.send(result);
    });
}

function createPachEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    //console.log(chalk.blue(`PATCH Route Created and listening at:  ${FullPath}`));


    Server.patch(FullPath, (req, res) => {

    })
}


function createPutEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    //console.log(chalk.blue(`PUT Route Created and listening at:  ${FullPath}`));

    Server.put(FullPath, (req, res) => {

    })
}

function createUpdateEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    //console.log(chalk.blue(`UPDATE Route Created and listening at:  ${FullPath}`));

    Server.patch(FullPath, (req, res) => {

    })
}

function createDeleteEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    //console.log(chalk.blue(`DELETE Route Created and listening at:  ${FullPath}`));

    Server.delete(FullPath, (req, res) => {

    })
}
