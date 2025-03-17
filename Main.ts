import { Aplication } from "./src/bootstrap/Application";
import { createContext } from "./src/bootstrap/AppContext";
import { Route, Get, Post, Put, Patch, Delete, Update } from "./src/common/decorators/RestDecorators";
import { Body, Param, Query } from "./src/common/decorators/ParamDecoratos";
import "reflect-metadata";
import { IsInt, IsString } from "class-validator";

const App: Aplication = createContext(3001);
App.startServer();

class User {
    @IsInt()
    id: number

    @IsString()
    name: string
};

@Route("/test")
class controlador {
    @Get("/name")
    getName(@Param("tunombre") name: string, @Query("edad") edad: number) {
        return "Hola "+name+" Edad "+edad;
    }

    @Post("/name2")
    getNamePost(@Param("tunombre") name: string, @Query("edad") edad: number, @Body("data", User) data: User) {
        console.log(data.name)
        return "Hola "+name+" Edad "+edad;
    }
};
