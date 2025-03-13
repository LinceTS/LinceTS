import "reflect-metadata";
import { BeehiveCore } from "../../core/Core";

export function Route(path: string) {
  return function (target: any) {
    // Almacena metadatos en la clase
    Reflect.defineMetadata("route:path", path, target);
    BeehiveCore.EntitiesControllInstance.addRouteClass(target.name, target, new target());
  };
}

export function Get(path: string) {
  return function (target: any, propertyKey: string) {
    // Almacena metadatos en el método
    Reflect.defineMetadata("route:method", "GET", target, propertyKey);
    Reflect.defineMetadata("route:path", path, target, propertyKey);
  };
}

export function Post(path: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("route:method", "POST", target, propertyKey);
    Reflect.defineMetadata("route:path", path, target, propertyKey);
  };
}

export function Put(path: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("route:method", "PUT", target, propertyKey);
    Reflect.defineMetadata("route:path", path, target, propertyKey);
  };
}

export function Patch(path: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("route:method", "PATCH", target, propertyKey);
    Reflect.defineMetadata("route:path", path, target, propertyKey);
  };
}

export function Delete(path: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("route:method", "DELETE", target, propertyKey);
    Reflect.defineMetadata("route:path", path, target, propertyKey);
  };
}

export function Update(path: string) {
  return function (target: any, propertyKey: string) {
    Reflect.defineMetadata("route:method", "Update", target, propertyKey);
    Reflect.defineMetadata("route:path", path, target, propertyKey);
  };
}
