import { Aplication } from "./src/bootstrap/Application";
import { createContext } from "./src/bootstrap/AppContext";
import { Route, Get, Post, Put, Patch, Delete, Update } from "./src/common/decorators/RestDecorators";
import { Body, Param, Query } from "./src/common/decorators/ParamDecoratos";
import "reflect-metadata";

const App: Aplication = createContext(3000);
App.startServer();

@Route("/test")
class controlador {
    @Get("/name")
    getName(@Param("tunombre") name: string, @Query("edad") edad: number,) {
        return "Hola "+name+" Edad "+edad;
    }
}
@Route("/beehive")
class MainController {
  @Get("/HelloWorld")
  helloWorld(@Param("name") name: string,@Query("test") test: string,  @Param("apellido") apellido: string) {
    return `Hello ${name} ${apellido} not gonna work ${test}`;
  }
}

@Route("/Ruta")
class Prueba {
    @Post("/HelloWorld2")
    getSaludo(@Param("name") name: string, @Query("data") data: string, @Body body: string, @Param("name2") name2: string) {
        return `Hola ${name}!`;
    }

    @Put("/HelloWorld2")
    getSaludo2() {
        return "Hola isma!";
    }

    @Patch("/HelloWorld2")
    getSaludo3() {
        return "Hola isma!";
    }

    @Delete("/HelloWorld2")
    getSaludo4() {
        return "Hola isma!";
    }

    @Update("/HelloWorld2")
    getSaludo5() {
        return "Hola isma!";
    }
}
