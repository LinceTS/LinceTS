import { Aplication } from "../bootstrap/Application";
import { EntitiesControll } from "./EntitiesControl";
import { startup } from '../cli/Startup';
import { createEndpoints } from "./Server/Functions";

export class BeehiveCore {
    private static Context: Aplication;
    public static EntitiesControllInstance: EntitiesControll = new EntitiesControll();

    public static setContext(App: Aplication): void {
        BeehiveCore.Context = App;
    }

    public static Startup() {
        startup(BeehiveCore.Context.port);
        BeehiveCore.EntitiesControllInstance.showControllerEntities();
        createEndpoints(this.Context.Server);
    }
}
