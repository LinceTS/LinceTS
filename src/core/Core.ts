import { Aplication } from "../bootstrap/Application";
import { EntitiesControll } from "./EntitiesControl";

export class BeehiveCore {
    private static Context: Aplication;
    public static EntitiesControllInstance: EntitiesControll = new EntitiesControll();

    public static setContext(App: Aplication): void {
        BeehiveCore.Context = App;
    }
}
