export interface Dependency {
    id: number;
    name: string;
    target: any;
    depends: any;
    instance?: any;
    instances?: any;
    config?: any;
}

export class RouteDependency implements Dependency {
    id: number;
    name: string;
    target: any;
    depends: any;
    instance?: any;
    instances?: any;
    config?: any;
}

export class ServiceDependency implements Dependency {
    id: number;
    name: string;
    target: any;
    depends: any;
    instance?: any;
    instances?: any;
    config?: any;
}

export class DependencyFactory {
    static create<T extends Dependency>(name: string,type: new () => T, depends: T | null, actualMaxid: number, Target: new () => T): T {
        const dependency = new type();
        dependency.name = name;
        dependency.id = actualMaxid + 1;
        dependency.depends = depends;
        return dependency;
    }
}

const service = DependencyFactory.create("Service 1",ServiceDependency, null, 1, null);

const route = DependencyFactory.create("Controller 1",RouteDependency, service, 2, null);
