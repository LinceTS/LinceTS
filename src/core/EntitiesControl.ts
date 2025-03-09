import "reflect-metadata";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
import { BeehiveCore } from "./Core";

export interface EntityRegistry<T> {
  key: string;
  obj: any;
  instance: T;
}

export interface MethodRegistry<T> {
    FullPath: string;
    HttpMethod: string;
    MethodName: string;
    Instance: T
}

export class EntitiesControll {
  public static Routes: Array<EntityRegistry<any>> = [];
  public static RoutesMethods: Array<MethodRegistry<any>> = [];

  public addRouteClass(keyI: string, objI: Object, instanceI: any): void {
    EntitiesControll.Routes.push({ key: keyI, obj: objI, instance:  instanceI});
  }

  public showControllerEntities(): void {
    const iterateMethods = (
      obj: any,
      methodList: Array<string>,
      controllPath: string,
      className: string
    ): string => {
      let buildedOutput: Array<string> = [];

      for (const methodName of methodList) {
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

        let phrase = `\n                                NAME: ${chalk.blue(
          methodName
        )} | ${chalk.green(httpMethod)} ${chalk.yellow(
          controllPath
        )}${chalk.yellow(routeMethod)}`;
        buildedOutput.push(phrase);

        let instance = EntitiesControll.Routes.find(route => route.key === className);

        let method: MethodRegistry<typeof obj> = {FullPath: controllPath + routeMethod, HttpMethod: httpMethod, MethodName: methodName, Instance: instance.instance};

        EntitiesControll.RoutesMethods.push(method);
      }

      return buildedOutput.join();
    };

    EntitiesControll.Routes.forEach((object, i) => {
      let controllerPath = Reflect.getMetadata("route:path", object.obj);

      let methodNames: Array<string> = Object.getOwnPropertyNames(
        object.obj.prototype
      ).filter((method) => method !== "constructor");

      console.log(`
                ${chalk.magenta(`C${i + 1}`)}:
                - CLASS NAME: ${chalk.cyan(
                  object.obj.name
                )} | ROUTE: ${chalk.yellow(controllerPath)}
                - METHODS:
                    ${iterateMethods(object.obj, methodNames, controllerPath, object.obj.name)}
            `);
    });
  }
}
