import { ITipoPago, ITiposuscripcion } from "../../../interfaces/ISuscripciones";
import { suscripcionNombreDefault } from "../../../utils/ConfiguracionesENV";
import { Suscriptor } from "../suscriptor/Suscriptor";
import { NuevoPago } from "./NuevoPago";

export class PagoSuscripcion extends NuevoPago {
    
    private _tipoSuscripcion: ITiposuscripcion; 
    private _suscriptorPagador: Suscriptor; 

    constructor() {
        super()
        this._tipoSuscripcion = suscripcionNombreDefault;
        this._tipoPago = ITipoPago.PAGOSUSCRIPCION;
    }

    //* Tipo Suscripcion
    set tipoSuscripcion(tipoSuscripcion: ITiposuscripcion) {
        this._tipoSuscripcion = tipoSuscripcion
    }

    get tipoSuscripcion() : ITiposuscripcion{
        return this._tipoSuscripcion
    }

    //* Suscriptor Pagador
    set suscriptorPagador(suscriptorPagador: Suscriptor) {
        //! Si no existe en la BD, throw error. Buscar entre todos los suscriptores, si alguno existe, guardar el pago.
        this._suscriptorPagador = suscriptorPagador;
    }

    get suscriptorPagador(): Suscriptor {        
        return this._suscriptorPagador;
    }

    toString(): string{
        return `tipoSuscripcion${this._tipoSuscripcion}, suscriptorPagador=${this._suscriptorPagador}`
    }

}

