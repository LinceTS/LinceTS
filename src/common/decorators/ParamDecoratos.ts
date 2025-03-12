import "reflect-metadata";
import { BeehiveCore } from "../../core/Core";

export function Param(metadataKey: string) {
    return function (target: any, propertyKey: string, parameterIndex: number) {
      const existingMetadata = Reflect.getOwnMetadata(metadataKey, target, propertyKey) || [];
      existingMetadata[parameterIndex] = metadataKey;
      Reflect.defineMetadata(metadataKey, existingMetadata, target, propertyKey);
    };
};

export function PathVariable(metadataKey: string) {
    return function (target: any, propertyKey: string, parameterIndex: number) {
      const existingMetadata = Reflect.getOwnMetadata(metadataKey, target, propertyKey) || [];
      existingMetadata[parameterIndex] = metadataKey;
      Reflect.defineMetadata(metadataKey, existingMetadata, target, propertyKey);
    };
};

export function Header(metadataKey: string) {
    return function (target: any, propertyKey: string, parameterIndex: number) {
      const existingMetadata = Reflect.getOwnMetadata(metadataKey, target, propertyKey) || [];
      existingMetadata[parameterIndex] = metadataKey;
      Reflect.defineMetadata(metadataKey, existingMetadata, target, propertyKey);
    };
}

export function Query(metadataKey: string) {
    return function (target: any, propertyKey: string, parameterIndex: number) {
      const existingMetadata = Reflect.getOwnMetadata(metadataKey, target, propertyKey) || [];
      existingMetadata[parameterIndex] = metadataKey;
      Reflect.defineMetadata(metadataKey, existingMetadata, target, propertyKey);
    };
};
