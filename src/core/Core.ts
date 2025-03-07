import { Aplication } from "../bootstrap/Application";

export class BeehiveCore {
    private static Context: Aplication;

    public static setContext(App: Aplication): void {
        BeehiveCore.Context = App;
    }
}
