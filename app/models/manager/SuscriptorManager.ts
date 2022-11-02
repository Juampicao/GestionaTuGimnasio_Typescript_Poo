import { ISuscritorManagerService } from "../../interfaces/services/ISuscriptorManagerService";
import { CustomLogger } from "../../utils/CustomLogger";
import { SuscriptorFilter } from "../filter/SuscriptorFilter";
import { Suscriptor } from "../main/suscriptor/Suscriptor";

export class SuscriptorManager{
    private _ISuscriptorManagerService: ISuscritorManagerService; 
    private _customLog: CustomLogger; 

    constructor(iContentManagerService: ISuscritorManagerService, customLog: CustomLogger = new CustomLogger() ) {
        this._ISuscriptorManagerService = iContentManagerService
        this._customLog = customLog;
    }

    getSuscriptorByData(data : string): Array<Suscriptor> {
        const filter = new SuscriptorFilter();
        filter.data = data;
        let response: Array<Suscriptor> = []; 
        response = this._ISuscriptorManagerService.getSuscriptoresByFilter(filter);
        this._customLog.logInfo(`Mostrando` + response.length + `Elementos`);
        this._customLog.logDebug(`Devolviendo ${response}`);
        return response; 
    }
}