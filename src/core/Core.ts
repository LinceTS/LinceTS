import { Aplication } from "../bootstrap/Application";
import { EntitiesControll } from "./EntitiesControl";
import { startup } from '../cli/Startup';
import { createEndpoints } from "./Server/Functions";
import { Logger } from "../observability/Logger/Logger";

export class BeehiveCore {
    private static Context: Aplication;
    public static EntitiesControllInstance: EntitiesControll = new EntitiesControll();

    public static setContext(App: Aplication): void {
        BeehiveCore.Context = App;
    }

    public static Startup() {
        startup(BeehiveCore.Context.port);
        BeehiveCore.EntitiesControllInstance.showControllerEntities();
        Logger.startLogging(this.Context.Server);
        createEndpoints(this.Context.Server);
    }
}
