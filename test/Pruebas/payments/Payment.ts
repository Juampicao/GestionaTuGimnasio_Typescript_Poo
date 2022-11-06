// En el mas alto nivel de la clase Pago, debe ir el Tipo mas alto que realizara un pago.
// Creador: No importa aca el tipo de usuario, eso lo defino en el pagadorService.
// Pagador: No importa el tipo, si es un suscriptor o un X. Lo defino en el pagadorService. 
    //? ¿Si un gimnasio no quiere guardar quien lo pago?¿ crea un suscriptor 1 que paga siempre. 
// Puedo forzarlo en la clase que extiende, paymentSubscription, que el el set pagador

import { ErrorExternoAlPasarParams } from "../../../app/error/ErrorExternoAlPasarParams";
import { IEstadoPago, IMetodoPago, ITipoPago, IValorTipoSuscripcion } from "../../../app/interfaces/ISuscripciones";
import { MetodoPago } from "../../../app/models/helpers/MetodoPago";
import { Usuario } from "../../../app/models/main/usuario/Usuario";
import { fechaCreacionDefault, FechaCreacionSinceDefault, FechaCreacionUntilDefault, maxFechaCreacion, maxFechaCreacionSince, metodoPagoDefault, minFechaCreacion, minFechaCreacionSince, montoTotalMax } from "../../../app/utils/ConfiguracionesENV";
import { CustomLogger } from "../../../app/utils/CustomLogger";
import { generatePagoId } from "../../../app/utils/helpers";


let customlogger = new CustomLogger();

/**
 * Payment Abstract Class
 * @param estadoPago: IMetodoPago
 */
export abstract class Payment {

    protected _id: number;
    protected _creador: Usuario;
    // Todo creador cualquier tipo extends
    // protected _creador: <T extends Usuario>
    protected _montoTotal: number; 
    protected _fechaCreacion: Date;
    protected _metodoPago: IMetodoPago;
    protected _tipoPago: ITipoPago;
    protected _estadoPago: IEstadoPago; 
    protected _pagador: any;

    constructor() {
        this._id = generatePagoId();
        this._fechaCreacion = fechaCreacionDefault;
        this._metodoPago = metodoPagoDefault;
        this._estadoPago = IEstadoPago.GENERADO;
    }

   
    //* Monto Total
    set montoTotal(montoTotal: number) {

        if (montoTotal <= 0 || montoTotal > montoTotalMax) {
            throw new ErrorExternoAlPasarParams (`El montoTotal del pago no puede ser menor a 0 ni mayor a ${montoTotalMax}.`)
        }
    
        this._montoTotal = montoTotal;
    }

    get montoTotal() : number {
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
