import "reflect-metadata";
import { BeehiveCore } from "../../core/Core";

export function Param(paramKey: string) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    console.log(paramKey);
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
  };
}

export function Query(target: any, propertyKey: string, parameterIndex: number) {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
};

export function Body(target: any, propertyKey: string, parameterIndex: number) {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
};
