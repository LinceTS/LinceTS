import { PetitionEntity } from './Entity';
import { Express } from 'express';
import "reflect-metadata";
import { BeehiveCore } from '../Core';
import { EntitiesControll } from '../EntitiesControl';

export function createEndpoints(pet: PetitionEntity, Server: Express) {
    EntitiesControll.Routes.forEach(route => {

    })

    switch(pet.Type){
        case "GET":
            createGetEndPoint(Server, pet.FullPath);
            break;
        case "PUT":
            createPutEndPoint(Server, pet.FullPath);
            break;
        case "POST":
            createPostEndPoint(Server, pet.FullPath);
            break;
        case "PATCH":
            createPachEndPoint(Server, pet.FullPath);
            break;
        case "DELETE":
            createPachEndPoint(Server, pet.FullPath);
            break;
        case "UPDATE":
            createPachEndPoint(Server, pet.FullPath);
            break;
    }
}

function createGetEndPoint(Server: Express, FullPath: string) {
    Server.get(FullPath, (req, res) => {

    })
}

function createPostEndPoint(Server: Express, FullPath: string) {
    Server.post(FullPath, (req, res) => {

    })
}

function createPachEndPoint(Server: Express, FullPath: string) {
    Server.patch(FullPath, (req, res) => {

    })
}


function createPutEndPoint(Server: Express, FullPath: string) {
    Server.put(FullPath, (req, res) => {

    })
}

function createUpdateEndPoint(Server: Express, FullPath: string) {
    Server.patch(FullPath, (req, res) => {

    })
}

function createDeleteEndPoint(Server: Express, FullPath: string) {
    Server.delete(FullPath, (req, res) => {

    })
}
