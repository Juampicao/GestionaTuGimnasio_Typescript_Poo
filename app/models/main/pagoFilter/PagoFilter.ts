import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { IMetodoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../interfaces/ISuscripciones";
import { FechaCreacionSinceDefault, FechaCreacionUntilDefault, maxFechaCreacionSince, maxFechaCreacionUntil, minFechaCreacionSince, minFechaCreacionUntil } from "../../../utils/ConfiguracionesENV";
import { CustomLogger } from "../../../utils/CustomLogger";

let _customLogger = new CustomLogger();

export class PagoFilter {
    
    private _montoTotal: IValorTipoSuscripcion; 
    private _tipoSuscripcion: ITiposuscripcion; 
    private _fechaCreacionSince: Date;
    private _fechaCreacionUntil: Date; 
    private _metodoPago: IMetodoPago;

    constructor() {
        this._montoTotal = IValorTipoSuscripcion.VOID;
        this._tipoSuscripcion = ITiposuscripcion.VOID;
        this._fechaCreacionSince = FechaCreacionSinceDefault;
        this._fechaCreacionUntil = FechaCreacionUntilDefault;
        this._metodoPago = IMetodoPago.VOID;
    }

    //* Monto Total
    set montoTotal(montoTotal: IValorTipoSuscripcion) {
        this._montoTotal = montoTotal;
    }

    get montoTotal() {
        return this._montoTotal;
    }

    //* Tipo Suscripcion
    set tipoSuscripcion(tipoSuscripcion: ITiposuscripcion) {
        this._tipoSuscripcion = tipoSuscripcion;
    }

    get tipoSuscripcion() {
        return this._tipoSuscripcion;
    }

    //* Fecha Creacion
    set fechaCreacionSince(fechaCreacionSince: Date) {
        
        _customLogger.logDebug(`ContentItemFilter, FechaCreacionSinceParam:${fechaCreacionSince}`)
        if (fechaCreacionSince > maxFechaCreacionSince || fechaCreacionSince < minFechaCreacionSince) {
            throw new ErrorExternoAlPasarParams(`La fechaCreacionSince debe estar entre ${minFechaCreacionSince} y ${maxFechaCreacionSince} `)
        }
        this._fechaCreacionSince = fechaCreacionSince;
    }

    get fechaCreacionSince() {
        return this._fechaCreacionSince
    }

    set fechaCreacionUntil(fechaCreacionUntil: Date) {

        _customLogger.logDebug(`ContentItemFilter, FechaCreacionUntilParam:${fechaCreacionUntil}`)
         if (fechaCreacionUntil > maxFechaCreacionUntil || fechaCreacionUntil < minFechaCreacionUntil) {
            throw new ErrorExternoAlPasarParams(`La fechaCreacionUntil debe estar entre ${minFechaCreacionUntil} y ${maxFechaCreacionUntil} `)
        }
        this._fechaCreacionUntil = fechaCreacionUntil;
    }

    get fechaCreacionUntil() {
        return this._fechaCreacionUntil
    }

    //* Metodo pago
    set metodoPago(metodoPago: IMetodoPago) {
        this._metodoPago = metodoPago;
    }

    get metodoPago() {
        return this._metodoPago;
    }


}