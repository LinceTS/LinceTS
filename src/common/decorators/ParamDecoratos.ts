import "reflect-metadata";
import { BeehiveCore } from "../../core/Core";
import { EntitiesControll } from "../../core/EntitiesControl";

export interface ParamDeclaration {
  type: string,
  target: any,
  propertyKey: string,
  parameterIndex: number,
  paramKey: string
};

export function Param(paramKey: string) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    // console.log(paramKey);
    // console.log(target);
    // console.log(propertyKey);
    // console.log(parameterIndex);

    EntitiesControll.MethodParam.push({type: "@Param",target: target, propertyKey: propertyKey, parameterIndex: parameterIndex, paramKey: paramKey})
  };
};

export function Query(paramKey: string) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    // console.log(paramKey);
    // console.log(target);
    // console.log(propertyKey);
    // console.log(parameterIndex);

    EntitiesControll.MethodParam.push({type: "@Query",target: target, propertyKey: propertyKey, parameterIndex: parameterIndex, paramKey: paramKey})
  };
}

export function Body(target: any, propertyKey: string, parameterIndex: number) {
  // console.log(target);
  // console.log(propertyKey);
  // console.log(parameterIndex);
  EntitiesControll.MethodParam.push({type: "@Body",target: target, propertyKey: propertyKey, parameterIndex: parameterIndex, paramKey: "BodyAt"})
};
