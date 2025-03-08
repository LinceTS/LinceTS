import "reflect-metadata";
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";

export interface EntityRegistry {
  key: string;
  obj: any;
}

export class EntitiesControll {
  public static Routes: Array<EntityRegistry> = [];

  public addRouteClass(keyI: string, objI: Object): void {
    EntitiesControll.Routes.push({ key: keyI, obj: objI });
  }

  public showControllerEntities(): void {
    const iterateMethods = (
      obj: any,
      methodList: Array<string>,
      controllPath: string
    ): string => {
      let buildedOutput: Array<string> = [];

      for (const methodName of methodList) {
        let httpMethod: String = Reflect.getMetadata(
          "route:method",
          obj.prototype,
          methodName
        );
        let routeMethod: String = Reflect.getMetadata(
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
                    ${iterateMethods(object.obj, methodNames, controllerPath)}
            `);
    });
  }
}
