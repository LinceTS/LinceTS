import { Aplication } from "./src/bootstrap/Application";
import { createContext } from "./src/bootstrap/AppContext";
import { Route, Get, Post } from "./src/common/decorators/RestDecorators";
import "reflect-metadata";

const App: Aplication = createContext(3000);
App.startServer();

@Route("/beehive")
class MainController {
  @Get("/HelloWorld")
  helloWorld() {
    console.log("opa opa")
    return "Hello World!!";
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
