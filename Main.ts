import { Aplication } from "./src/bootstrap/Application";
import { createContext } from "./src/bootstrap/AppContext";
import { Route, Get, Post, Put, Patch, Delete, Update } from "./src/common/decorators/RestDecorators";
import { Param } from "./src/common/decorators/ParamDecoratos";
import "reflect-metadata";
import { delay } from "tsyringe";

const App: Aplication = createContext(3000);
App.startServer();

@Route("/beehive")
class MainController {
  @Get("/HelloWorld")
  helloWorld(@Param("name") name: string, @Param("id") id: string) {
    console.log("Hola, ",name)
    return "Hello World!!";
  }
}

@Route("/Ruta")
class Prueba {
    @Post("/HelloWorld2")
    getSaludo() {
        return "Hola isma!";
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














// // Inspección de metadatos sin instanciar la clase
// const controllerPath = Reflect.getMetadata("route:path", UserController);
// console.log(`Controller route: ${controllerPath}`); // Imprime: Controller route: /users

// // Obtener metadatos de métodos
// const methodNames = Object.getOwnPropertyNames(UserController.prototype).filter(
//   prop => prop !== "constructor"
// );

// for (const methodName of methodNames) {
//   const httpMethod = Reflect.getMetadata("route:method", UserController.prototype, methodName);
//   const methodPath = Reflect.getMetadata("route:path", UserController.prototype, methodName);

//   console.log(`${httpMethod} ${controllerPath}${methodPath}`); // Imprime: GET /users/:id
//
