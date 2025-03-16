import { Aplication } from "./src/bootstrap/Application";
import { createContext } from "./src/bootstrap/AppContext";
import { Route, Get, Post, Put, Patch, Delete, Update } from "./src/common/decorators/RestDecorators";
import { Body, Param, Query } from "./src/common/decorators/ParamDecoratos";
import "reflect-metadata";

const App: Aplication = createContext(3001);
App.startServer();

@Route("/test")
class controlador {
    @Get("/name")
    getName(@Param("tunombre") name: string, @Query("edad") edad: number) {
        return "Hola "+name+" Edad "+edad;
    }

    @Post("/name2")
    getNamePost(@Param("tunombre") name: string, @Query("edad") edad: number, @Body data: string) {
        console.log(data)
        return "Hola "+name+" Edad "+edad;
    }
}
