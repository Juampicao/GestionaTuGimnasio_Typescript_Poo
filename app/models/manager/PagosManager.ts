import { IMetodoPago, ITipoPago, ITiposuscripcion } from "../../interfaces/ISuscripciones";
import { IPagosManagerService } from "../../interfaces/services/IPagosManagerService";
import { NuevoPago } from "../main/pago/NuevoPago"
import { PagoFilter } from "../filter/PagoFilter";
import { Usuario } from "../main/usuario/Usuario";
import { FechaCreacionSinceDefault, FechaCreacionUntilDefault } from "../../utils/ConfiguracionesENV";
import { CustomLogger } from "../../utils/CustomLogger";

export class PagosManager {
    private _iPagosManagerService: IPagosManagerService; 
    private _customLog: CustomLogger; 

    constructor(iContentManagerService: IPagosManagerService, customLog: CustomLogger = new CustomLogger() ) {
        this._iPagosManagerService = iContentManagerService
        this._customLog = customLog
    }

    getPagosByTipoPago(tipoPago: ITipoPago): Array<NuevoPago> {
        const filter = new PagoFilter();
        filter.tipoPago = tipoPago; 
        let response: Array<NuevoPago> = []; 
        response = this._iPagosManagerService.getPagosItemsByFilter(filter);
        this._customLog.logInfo(`Mostrando` + response.length + `Elementos`);
        this._customLog.logDebug(`Devolviendo ${response}`);

        return response; 
    }

    getPagosByTipoSuscripcion(tipoSuscripcion: ITiposuscripcion): Array<NuevoPago> {
        const filter = new PagoFilter();
        filter.tipoSuscripcion = tipoSuscripcion; 
        let response: Array<NuevoPago> = []; 
        response = this._iPagosManagerService.getPagosItemsByFilter(filter);

        return response; 
    }


    getPagosByFechaCreacion(fechaCreacionSince: Date = FechaCreacionSinceDefault, fechaCreacionUntil: Date = FechaCreacionUntilDefault): Array<NuevoPago> {
        this._customLog.logDebug(`desde getContentItemFechaCreacion. fechaCreacionSince=${fechaCreacionSince} & fechaCreacionUntil=${fechaCreacionUntil}`)
       
        const filter = new PagoFilter();
        filter.fechaCreacionSince = fechaCreacionSince; 
        filter.fechaCreacionUntil = fechaCreacionUntil;
        let response: Array<NuevoPago> = []; 
        response = this._iPagosManagerService.getPagosItemsByFilter(filter);
        this._customLog.logInfo(`Mostrando` + response.length + `Elementos`);
        this._customLog.logDebug(`Devolviendo ${response}`);
    
        return response; 
    }

    getPagosByCreador(creador: Usuario): Array<NuevoPago> {
        const filter = new PagoFilter();
        filter.creador = creador; 
        let response: Array<NuevoPago> = []; 
        response = this._iPagosManagerService.getPagosItemsByFilter(filter);

        return response; 
    }


    getPagosByMetodoPago(metodoPago: IMetodoPago): Array<NuevoPago> {
        const filter = new PagoFilter();
        filter.metodoPago = metodoPago 
        let response: Array<NuevoPago> = []; 
        response = this._iPagosManagerService.getPagosItemsByFilter(filter);

        return response; 
    }

}