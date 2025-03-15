import { Express, Request } from "express";
import "reflect-metadata";
import { EntitiesControll } from "../EntitiesControl";
import { ParamDeclaration } from "../../common/decorators/ParamDecoratos";

export function createEndpoints(Server: Express) {
  //console.log(EntitiesControll.RoutesMethods);
  EntitiesControll.RoutesMethods.forEach((method) => {
    switch (method.HttpMethod) {
      case "GET":
        createGetEndPoint(
          Server,
          method.FullPath,
          method.MethodName,
          method.Instance,
          method.Params
        );
        break;
      case "PUT":
        createPutEndPoint(
          Server,
          method.FullPath,
          method.MethodName,
          method.Instance,
          method.Params
        );
        break;
      case "POST":
        createPostEndPoint(
          Server,
          method.FullPath,
          method.MethodName,
          method.Instance,
          method.Params
        );
        break;
      case "PATCH":
        createPachEndPoint(
          Server,
          method.FullPath,
          method.MethodName,
          method.Instance,
          method.Params
        );
        break;
      case "DELETE":
        createDeleteEndPoint(
          Server,
          method.FullPath,
          method.MethodName,
          method.Instance,
          method.Params
        );
        break;
      case "UPDATE":
        createUpdateEndPoint(
          Server,
          method.FullPath,
          method.MethodName,
          method.Instance,
          method.Params
        );
        break;
    }
  });
}

function createGetEndPoint(
  Server: Express,
  FullPath: string,
  MethodName: string,
  ClassInstance: any,
  params: ParamDeclaration[]
) {
  //console.log(chalk.blue(`GET Route Created and listening at:  ${FullPath}`));
  Server.get(FullPath, (req, res) => {
    try {
      // Extraer parámetros en el orden correcto
      const args = extractParameters(req, params);

      // Verificar si hay algún parámetro undefined
      if (args.includes(undefined)) {
        res.status(400).send({
          error: "Bad Request",
          message: "Missing required parameters",
        });
        return; // Solo retorna del callback, no devuelve un valor
      }

      // Para debugging

      // Llamar al método con los argumentos extraídos
      const result = ClassInstance[MethodName](...args);
      res.send(result);
    } catch (error) {
      console.error(`Error executing ${MethodName}:`, error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
}

function createPostEndPoint(
  Server: Express,
  FullPath: string,
  MethodName: string,
  ClassInstance: any,
  params: ParamDeclaration[]
) {
  //console.log(chalk.blue(`POST Route Created and listening at:  ${FullPath}`));

  Server.post(FullPath, (req, res) => {
    const result = ClassInstance[MethodName](req.params);
    res.send(result);
  });
}

function createPachEndPoint(
  Server: Express,
  FullPath: string,
  MethodName: string,
  ClassInstance: any,
  params: ParamDeclaration[]
) {
  //console.log(chalk.blue(`PATCH Route Created and listening at:  ${FullPath}`));

  Server.patch(FullPath, (req, res) => {});
}

function createPutEndPoint(
  Server: Express,
  FullPath: string,
  MethodName: string,
  ClassInstance: any,
  params: ParamDeclaration[]
) {
  //console.log(chalk.blue(`PUT Route Created and listening at:  ${FullPath}`));

  Server.put(FullPath, (req, res) => {});
}

function createUpdateEndPoint(
  Server: Express,
  FullPath: string,
  MethodName: string,
  ClassInstance: any,
  params: ParamDeclaration[]
) {
  //console.log(chalk.blue(`UPDATE Route Created and listening at:  ${FullPath}`));

  Server.patch(FullPath, (req, res) => {});
}

function createDeleteEndPoint(
  Server: Express,
  FullPath: string,
  MethodName: string,
  ClassInstance: any,
  params: ParamDeclaration[]
) {
  //console.log(chalk.blue(`DELETE Route Created and listening at:  ${FullPath}`));

  Server.delete(FullPath, (req, res) => {});
}

// Función para extraer parámetros en el orden correcto
function extractParameters(req: Request, params: ParamDeclaration[]): any[] {
  // Determinar el tamaño del array (encontrar el índice máximo)
  const maxIndex =
    params.length > 0 ? Math.max(...params.map((p) => p.parameterIndex)) : -1;

  // Crear un array con el tamaño adecuado
  const args: any[] = new Array(maxIndex + 1).fill(undefined);

  // Llenar el array con los valores correspondientes
  for (const param of params) {
    switch (param.type) {
      case "@Param":
        // Para parámetros de ruta (/:name)
        args[param.parameterIndex] = req.params[param.paramKey];
        break;

      case "@Query":
        // Para parámetros de consulta (?data=value)
        args[param.parameterIndex] = req.query[param.paramKey];
        break;

      case "@Body":
        // Para el cuerpo de la petición (JSON/POST data)
        if (param.paramKey) {
          // Si se especificó una clave específica del body
          args[param.parameterIndex] = req.body?.[param.paramKey];
        } else {
          // Si se quiere todo el body
          args[param.parameterIndex] = req.body;
        }
        break;
    }
  }

  return args;
}
