import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { IEstadoPago, IMetodoPago, ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../interfaces/ISuscripciones";
import { fechaCreacionDefault, maxFechaCreacion, metodoPagoDefault, minFechaCreacion} from "../../../utils/ConfiguracionesENV";
import { Suscriptor } from "../suscriptor/Suscriptor";
import { Usuario } from "../usuario/Usuario";
// import { IdPago } from "../../id/IdPago";
import { Suscripcion } from "../suscripcion/Suscripcion";
import { generatePagoId } from "../../../utils/helpers";

export class Pago {
    private _montoTotal: IValorTipoSuscripcion; 
    private _tipoSuscripcion: ITiposuscripcion; 
    private _fechaCreacion: Date; 
    private _metodoPago: IMetodoPago;
    private _creador: Usuario; 
    private _suscriptorPagador: Suscriptor; 
    private _id: number;
    private _estadoPago: IEstadoPago;
    private _tipoPago: ITipoPago;

    constructor() {
        this._montoTotal = new Suscripcion()._valor; 
        this._tipoSuscripcion = new Suscripcion()._nombre;
        this._fechaCreacion = fechaCreacionDefault; 
        this._metodoPago = metodoPagoDefault;
        this._id = generatePagoId();
        this._estadoPago = IEstadoPago.GENERADO;
        this._tipoPago = ITipoPago.PAGOSUSCRIPCION;
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

    //* Tipo Suscripcion
    set tipoSuscripcion(tipoSuscripcion: ITiposuscripcion) {
        this._tipoSuscripcion = tipoSuscripcion
    }

    get tipoSuscripcion() : ITiposuscripcion{
        return this._tipoSuscripcion
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

    //* Suscriptor Pagador
    set suscriptorPagador(suscriptorPagador: Suscriptor) {
        //! Si no existe en la BD, throw error. Buscar entre todos los suscriptores, si alguno existe, guardar el pago.
        this._suscriptorPagador = suscriptorPagador;
    }

    get suscriptorPagador(): Suscriptor {        
        return this._suscriptorPagador;
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

    set tipoPago(tipoPago: ITipoPago) {
        this._tipoPago = tipoPago;
    }

    get tipoPago(): ITipoPago{
        return this._tipoPago;
    }

      
    toString(): string {
          return `Pago: montoTotal=${this._montoTotal}, fechaCreacion=${this._fechaCreacion}, tipoSuscripcion=${this._tipoSuscripcion}, metodoPago=${this._metodoPago}, creador=${this._creador}, id=${this._id}, suscriptorPagador=${this._suscriptorPagador}`
      }
}



export abstract class Pago2{
    private _montoTotal: IValorTipoSuscripcion; 
    // private _tipoSuscripcion: ITiposuscripcion; 
    // private _fechaCreacion: Date; 
    // private _metodoPago: IMetodoPago;
    // private _creador: Usuario; 
    // private _suscriptorPagador: Suscriptor; 
    // private _id: number;
    // private _estadoPago: IEstadoPago;
    protected _tipoPago: ITipoPago;

    constructor() {

     }
    
    set montoTotal(_montoTotal: IValorTipoSuscripcion) {
        this._montoTotal = _montoTotal
    }

    // set tipoPago(tipoPago: ITipoPago) {
    //     this._tipoPago = tipoPago
    // }
}

class Pago3 extends Pago2{
    
    // constructor(tipoSuscripcion: ITiposuscripcion) {
    //     super(tipoSuscripcion , ITiposuscripcion.PREMIUM)
        
    // }
    constructor() {
        super()
        this._tipoPago = ITipoPago.PAGOPRODUCTO;
    }
}

let pago = new Pago3();
pago.montoTotal = 8888;
