import { ErrorExternoAlPasarParams } from "../../../app/error/ErrorExternoAlPasarParams";
import { ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../app/interfaces/ISuscripciones";
import { Suscriptor } from "../../../app/models/main/suscriptor/Suscriptor";
import { Usuario } from "../../../app/models/main/usuario/Usuario";
import { montoTotalMax, suscripcionNombreDefault } from "../../../app/utils/ConfiguracionesENV";
import { CrearSuscriptoresPrueba } from "../../utils/CrearSuscriptoresPrueba";
import { Payment } from "./Payment"; 

// Add particular attributes only for this type of payment.
// Extends every Payment attributes
// id, creador,tipoPago, montoTotal, fechaCreacion, metodoPago, estadoPago, pagador.

export class PaymentSubscription extends Payment {

	private _tipoSuscripcion: ITiposuscripcion;

    /**
     * 
     * @param suscriptorPagador : Suscriptor
     */
	constructor(suscriptorPagador : Suscriptor, montoTotal : IValorTipoSuscripcion){
        super()

        this._pagador = suscriptorPagador;
        this._montoTotal = montoTotal; 
        this._tipoSuscripcion = suscripcionNombreDefault;
        this._tipoPago = ITipoPago.PAGOSUSCRIPCION; 

    }

    /**
    ** Monto Total
    // Todo ¿Como hago obligatorio esta validación?
    * Agrega una etapa de validación, debe ser un valor válido, de tipo suscripcion.
    * @param montoTotal: IValorTipoSuscripcion. 
    */
    set montoTotal(montoTotal: IValorTipoSuscripcion) {

         if (montoTotal <= 0 || montoTotal > montoTotalMax) {
            throw new ErrorExternoAlPasarParams (`El montoTotal del pago no puede ser menor a 0 ni mayor a ${montoTotalMax}.`)
        }
    
        this._montoTotal = montoTotal
    }


    /**
    ** Pagador
    * Agrega una etapa de validación, debe ser un pagador de tipo Suscriptor.
    * @param suscriptor: Suscriptor. 
    */
    set pagador(suscriptor: Suscriptor) {
        this._pagador = suscriptor; 
    }


    //* Tipo Suscripcion
    set tipoSuscripcion(tipoSuscripcion: ITiposuscripcion) {
        this._tipoSuscripcion = tipoSuscripcion
    }

    get tipoSuscripcion() : ITiposuscripcion{
        return this._tipoSuscripcion
    }

    toString(): string{
        return `tipoSuscripcion${this._tipoSuscripcion}, suscriptorPagador=${this._pagador}`
    }
    

}





class Usuario2 extends Usuario {
    constructor(){super()}
}

let usuario2 = new Usuario2()
let suscriptor = new CrearSuscriptoresPrueba().get1SuscriptorObject();

let pago = new PaymentSubscription(suscriptor, 100)
pago.pagador = suscriptor;

pago.pagador; // output => suscriptor
pago.estadoPago
pago.montoTotal = 10;
pago.montoTotal
