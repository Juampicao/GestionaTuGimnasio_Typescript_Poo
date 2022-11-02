
import { IMetodoPago } from "../../app/interfaces/ISuscripciones";
import { Pago } from "../../app/models/main/pago/Pago";
import { PagoSuscripcion } from "../../app/models/main/pago/PagoSuscripcion";
import { Suscriptor } from "../../app/models/main/suscriptor/Suscriptor";
import { Usuario } from "../../app/models/main/usuario/Usuario";
import { CustomLogger } from "../../app/utils/CustomLogger";

let customLogger = new CustomLogger();

export class CrearPagosPrueba{
    
    private _listaPagos: Array<PagoSuscripcion>; 

    constructor() {
        this._listaPagos = [];
    }

     /**
     * Crear una lista de pagos basicos para testear funcionalidades. 
     * @param cantidad : numero
     * @returns Lista de pagos con el length = cantidad. 
     */
    getParticularCuantityOfPagos(cantidad: number): Array<PagoSuscripcion> {
        for (let i = 0; i < cantidad; i++){
            let pago = new PagoSuscripcion()
            
            pago.suscriptorPagador = new Suscriptor();
            pago.creador = new Usuario();
            pago.fechaCreacion = new Date(2022, 1, 1)
            pago.metodoPago = IMetodoPago.EFECTIVO;
                    
            this._listaPagos.push(pago);
        }

        customLogger.logDebug(`Desde CrearPagos, la lista de pagos: ${this._listaPagos}`)
        return this._listaPagos; 
    }

    /**
    * Crea un pago especifico para testear funcionalidades.
    * @returns Objeto de 1 oagi especifico.
    */
    get1PagoObject(): PagoSuscripcion {
        
        let pago1 = new PagoSuscripcion();
        pago1.suscriptorPagador = new Suscriptor();
        pago1.creador = new Usuario();
        
        return pago1;
    }

    /**
    * Crea una lista de 3 pagos especificos para testear funcionalidades.
    * @returns Lista de 3 pagos especificos.
    */
    get3PagosList() : Array<PagoSuscripcion> {

        let pago1 = new PagoSuscripcion();
        pago1.suscriptorPagador = new Suscriptor();
        pago1.creador = new Usuario();
        pago1.fechaCreacion = new Date(2015, 1, 1)
        pago1.metodoPago = IMetodoPago.EFECTIVO
        
        let pago2 = new PagoSuscripcion();
        pago2.suscriptorPagador = new Suscriptor();
        pago2.creador = new Usuario();
        pago2.fechaCreacion = new Date(2010, 1, 1)
        pago2.metodoPago = IMetodoPago.EFECTIVO


        let pago3 = new PagoSuscripcion();
        pago3.suscriptorPagador = new Suscriptor();
        pago3.creador = new Usuario();
        pago3.fechaCreacion = new Date(2022, 1, 1)
        pago3.metodoPago = IMetodoPago.TARJETA;

        this._listaPagos.push(pago1, pago2, pago3)
        
        return this._listaPagos;
    }

   
}

