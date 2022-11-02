import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { IEstadoPago, IMetodoPago, ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../interfaces/ISuscripciones";
import { fechaCreacionDefault, FechaCreacionSinceDefault, FechaCreacionUntilDefault, maxFechaCreacion, maxFechaCreacionSince, metodoPagoDefault, minFechaCreacion, minFechaCreacionSince} from "../../../utils/ConfiguracionesENV";
import { Suscriptor } from "../suscriptor/Suscriptor";
import { Usuario } from "../usuario/Usuario";
// import { IdPago } from "../../id/IdPago";
import { Suscripcion } from "../suscripcion/Suscripcion";
import { generatePagoId } from "../../../utils/helpers";
import { MetodoPago } from "../../helpers/MetodoPago";
import { CustomLogger } from "../../../utils/CustomLogger";

let customlogger = new CustomLogger()


export abstract class NuevoPago {
    protected _montoTotal: IValorTipoSuscripcion; 
    protected _fechaCreacion: Date; 
    protected _metodoPago: IMetodoPago;
    protected _creador: Usuario; 
    protected _id: number;
    protected _estadoPago: IEstadoPago;
    protected _tipoPago: ITipoPago;

    constructor() {
        this._montoTotal = new Suscripcion()._valor; 
        this._fechaCreacion = fechaCreacionDefault; 
        this._metodoPago = metodoPagoDefault;
        this._id = generatePagoId();
        this._estadoPago = IEstadoPago.GENERADO;
    }

    //* Monto Total
    set montoTotal(montoTotal: IValorTipoSuscripcion) {

        //Todo: montoTotalMax y min. Setear en ENV para cuidar la app.
        if (montoTotal <= 0) {
            throw new ErrorExternoAlPasarParams (`El montoTotal del pago no puede ser menor a 0.`)
        }
    
        this._montoTotal = montoTotal
    
    }

    get montoTotal() : IValorTipoSuscripcion {
        return this._montoTotal;
    }



    //* Fecha Creacion
    set fechaCreacion(fechaCreacion: Date) {
       
        if (fechaCreacion > maxFechaCreacion || fechaCreacion < minFechaCreacion) {
            throw new ErrorExternoAlPasarParams(`La fechaCreacion debe estar entre ${maxFechaCreacion} y ${minFechaCreacion} `)
        }

        this._fechaCreacion = fechaCreacion; 
    }

    get fechaCreacion() : Date{
        return this._fechaCreacion
    }
    

    //* Metodo pago
    set metodoPago(metodoPago: IMetodoPago) {

        this._metodoPago = metodoPago; 
    }

    get metodoPago() : IMetodoPago {
        return this._metodoPago; 
    }

    /**
     * Permite pagar con mas 1 metodo. 
     * @param metodoPago : Objeto MetodoPago
     * ! 
     * Todo: ¿Como guardo la cantidad que pago en efectivo y la de tarjeta?
     */
    pagarDosMetodosPagoDiferentes(metodoPago: MetodoPago) {
        
        if (metodoPago.montoTotalPagado() > this._montoTotal) {
            throw new ErrorExternoAlPasarParams(`El monto Pagado no puede ser menor al valor de la suscripcion`);
        }
        
        return "exito"
        
    }

    //* Id
    get id() : number{
        return this._id;
    }

    // Todo: creador default, El Usuario Gimnasio que lo este realizando. 
    //* Creador 
    set creador(creador: Usuario) {
        this._creador = creador;
    }

    get creador(): Usuario{
        return this._creador; 
    }

    //* Estado del Pago
    set estadoPago(estadoPago: IEstadoPago) {
        this._estadoPago = estadoPago; 
    }
    
    get estadoPago(): IEstadoPago{
        return this._estadoPago; 
    }


    //* Tipo Pago
    get tipoPago(): ITipoPago{
        return this._tipoPago;
    }

    /**
     * Verifica si el pago se encuentra entre los dos parametros.
     * @param fechaCreacionSince 
     * @param fechaCreacionUntil 
     * @returns Boolean
     */
    containsFechaCreacion(fechaCreacionSince: Date = FechaCreacionSinceDefault, fechaCreacionUntil: Date = FechaCreacionUntilDefault): Boolean{
    
        customlogger.logDebug(`Desde containsRating(), this._fechaCreacion=${this._fechaCreacion}, fechaCreacionSince=${fechaCreacionSince} y fechaCreacionUntil=${fechaCreacionUntil}`)
         
         if (fechaCreacionSince > maxFechaCreacionSince || fechaCreacionSince < minFechaCreacionSince) {
            throw new ErrorExternoAlPasarParams(`La fechaCreacionSince debe estar entre ${minFechaCreacionSince} y ${maxFechaCreacionSince} `)
        }

        // Ambos parametros existen.
        if (fechaCreacionSince !== undefined) {

            if ( fechaCreacionSince <= this._fechaCreacion && this._fechaCreacion <= fechaCreacionUntil) {
                return true
            } else { 
                return false; 
            }
        }

         // Until no existe.
        else if (fechaCreacionUntil === undefined) {
            if (fechaCreacionSince <= this._fechaCreacion) {  
                return true
            } else {
                return false
            }
        }

        return false;       
    }
      
    toString(): string {
          return `Pago: montoTotal=${this._montoTotal}, fechaCreacion=${this._fechaCreacion}, metodoPago=${this._metodoPago}, creador=${this._creador}, id=${this._id}, tipoPago=${this._tipoPago}`
      }
}

