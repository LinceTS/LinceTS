/**
 * EntitiesControl.ts
 *
 * @description This file contains the structures and logic needed to registry and manipulate the controller class and the methods
 *
 * @author Anchel Ascaso Castro
 * @created 2025-03-12
 * @modified 2025-03-12
 * @version 0.0.1
 *
 */
import "reflect-metadata";
import chalk from "chalk";
import { ParamDeclaration } from "../common/decorators/ParamDecoratos";

/**
 * Interface representing a registered entity in the system.
 * @interface EntityRegistry
 * @template T The type of the entity instance
 */
export interface EntityRegistry<T> {
  /** Unique identifier for the entity */
  key: string;
  /** The class constructor reference */
  obj: any;
  /** The instantiated object */
  instance: T;
}

/**
 * Interface representing a registered controller method.
 * @interface MethodRegistry
 * @template T The type of the controller instance
 */
export interface MethodRegistry<T> {
  /** The complete URL path to the endpoint */
  FullPath: string;
  /** The HTTP method (GET, POST, etc.) */
  HttpMethod: string;
  /** The method name in the controller */
  MethodName: string;
  /** Reference to the controller instance */
  Instance: T;
  /** Params declaration */
  Params: Array<ParamDeclaration>;
}

/**
 * Interface representing a registered controller method.
 * @interface ParamRegistry
 *
 */

/**
 * Main controller for managing API route registration and discovery.
 * Uses reflection to map controller classes and methods to HTTP endpoints.
 *
 * @class EntitiesControll
 */
export class EntitiesControll {
  /** Static registry of all controller classes */
  public static Routes: Array<EntityRegistry<any>> = [];
  /** Static registry of all controller methods */
  public static RoutesMethods: Array<MethodRegistry<any>> = [];
  public static MethodParam: Array<ParamDeclaration> = [];

  /**
   * Registers a new controller class in the routing system.
   *
   * @param keyI Unique identifier for the controller
   * @param objI The controller class reference
   * @param instanceI The instantiated controller
   * @returns void
   */
  public addRouteClass(keyI: string, objI: Object, instanceI: any): void {
    EntitiesControll.Routes.push({ key: keyI, obj: objI, instance: instanceI });
  }

  /**
   * Displays all registered controllers and their methods in the console.
   * This method is primarily used for debugging and development purposes.
   *
   * @returns void
   */
  public showControllerEntities(): void {
    /**
     * Helper function to iterate through and display controller methods.
     * Also registers each method in the RoutesMethods registry.
     *
     * @param obj The controller class
     * @param methodList Array of method names
     * @param controllPath The base path for the controller
     * @param className The name of the controller class
     * @returns Formatted string representation of the methods
     */
    const iterateMethods = (
      obj: any,
      methodList: Array<string>,
      controllPath: string,
      className: string
    ): string => {
      let buildedOutput: Array<string> = [];

      for (const methodName of methodList) {
        // Extract metadata from method decorators
        let httpMethod: string = Reflect.getMetadata(
          "route:method",
          obj.prototype,
          methodName
        );

        let routeMethod: string = Reflect.getMetadata(
          "route:path",
          obj.prototype,
          methodName
        );

        // Obtener los metadatos para el parámetro "name"
        let nameMetadata = Reflect.getOwnMetadata(
          "name",
          obj.prototype,
          methodName
        );

        if (routeMethod) {
          // Find the controller instance
          let instance = EntitiesControll.Routes.find(
            (route) => route.key === className
          );

          // Register the method in the global registry
          let method: MethodRegistry<typeof obj> = {
            FullPath: controllPath + routeMethod,
            HttpMethod: httpMethod,
            MethodName: methodName,
            Instance: instance.instance,
            Params: []
          };

            // Filtrar los parámetros que coinciden con este método (target, propertyKey)
            // y que son de tipo "@Param"
            method.Params = EntitiesControll.MethodParam.filter(
            (param) =>
              param.propertyKey === methodName &&
              param.target === obj.prototype
            ).sort((a, b) => a.parameterIndex - b.parameterIndex);

            method.Params.map(param => {
              if(param.type === "@Param") {
                method.FullPath = method.FullPath + `/:${param.paramKey}`
              }
            })

            // Format for console output
            let phrase = `
                        ${chalk.green('Method:')} ${chalk.blue(methodName)}
                        ${chalk.green('HTTP Method:')} ${chalk.yellow(httpMethod)}
                        ${chalk.green('Full Path:')} ${chalk.yellow(method.FullPath)}
                        ${chalk.green('Params:')} ${chalk.magenta(method.Params.map(param => {
                          return `${param.type} ${param.paramKey} I ${param.parameterIndex}`
                        }).join(', '))}
            `;
            buildedOutput.push(phrase);

          EntitiesControll.RoutesMethods.push(method);
        }
      }

      return buildedOutput.join("");
    };
    // Iterate through all registered controllers
    EntitiesControll.Routes.forEach((object, i) => {
      // Get the base path for this controller
      let controllerPath = Reflect.getMetadata("route:path", object.obj);
      // Get all methods except the constructor
      let methodNames: Array<string> = Object.getOwnPropertyNames(
        object.obj.prototype
      ).filter((method) => method !== "constructor");
      // Log controller information
      console.log(`
                ${chalk.magenta(`C${i + 1}`)}:
                - CLASS NAME: ${chalk.cyan(
                  object.obj.name
                )} | ROUTE: ${chalk.yellow(controllerPath)}
                - METHODS:
                    ${iterateMethods(
                      object.obj,
                      methodNames,
                      controllerPath,
                      object.obj.name
                    )}
            `);
    });
  }

  public static genrateFullRouteWithParams() {

  }
}
