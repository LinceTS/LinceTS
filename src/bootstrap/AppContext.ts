import { BeehiveCore } from './../core/Core';
import { Aplication } from "./Application";

export function createContext(port: number): Aplication {
    const App: Aplication = new Aplication(port);
    BeehiveCore.setContext(App);
    return App;
}
