import { Express } from 'express';
import "reflect-metadata";
import { EntitiesControll } from '../EntitiesControl';

export function createEndpoints(Server: Express) {
    console.log(EntitiesControll.RoutesMethods);
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
                createPachEndPoint(Server, method.FullPath, method.MethodName, method.Instance);
                break;
            case "UPDATE":
                createPachEndPoint(Server, method.FullPath, method.MethodName, method.Instance);
                break;
        }
    })
}

function createGetEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    console.log("GET Route Created and listening at: ",FullPath)

    Server.get(FullPath, (req, res) => {
        const result = ClassInstance[MethodName](req.params);
        console.log(req.params)
        res.send(result);
    });
}

function createPostEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    Server.post(FullPath, (req, res) => {
        const result = ClassInstance[MethodName](req.params);
        res.send(result);
    });
}

function createPachEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    Server.patch(FullPath, (req, res) => {

    })
}


function createPutEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    Server.put(FullPath, (req, res) => {

    })
}

function createUpdateEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    Server.patch(FullPath, (req, res) => {

    })
}

function createDeleteEndPoint(Server: Express, FullPath: string, MethodName: string, ClassInstance: any) {
    Server.delete(FullPath, (req, res) => {

    })
}
