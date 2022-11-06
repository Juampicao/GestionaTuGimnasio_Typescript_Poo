import { IEstadoPago, IMetodoActualizacionFechaVencimiento, IMetodoPago, ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../app/interfaces/ISuscripciones";
import { Pago } from "../../../app/models/main/pago/Pago";
import { Suscriptor } from "../../../app/models/main/suscriptor/Suscriptor";
import {CrearUsuariosPrueba} from "../../utils/CrearUsuariosPrueba"
import { CustomLogger } from "../../../app/utils/CustomLogger";
import { DiasActualizacionFechaVencimientoDefault, metodoPagoDefault } from "../../../app/utils/ConfiguracionesENV";
import { IPagadorService } from "../../../app/interfaces/services/IPagadorService";
import { PagoSuscripcion } from "../../../app/models/main/pago/PagoSuscripcion";
import { MetodoPago } from "../../../app/models/helpers/MetodoPago";
import { NuevoPago } from "../../../app/models/main/pago/NuevoPago";

let _customLogger = new CustomLogger(); 

export class PagadorServiceMock  implements IPagadorService {
        
    constructor() {}

    /**
     * Crear un nuevo pago de tipo suscripcion.
     * Toma los datos del suscriptor, suscripcion adherida, monto de la suscripcion de forma automatica.
     * Actualiza la fecha de vencimiento segun el tipo de suscripcion.
     * @param suscriptor : Suscriptor pagador de la suscripcion.
     * @param fecha: fecha del pago.
     * @param metodoPago: Metodo a pagar.
     * @returns Pago de tipo Suscripcion.
     */
    CrearNuevoPagoSuscripcion(suscriptor: Suscriptor, fecha: Date = new Date(), metodoPago: IMetodoPago = metodoPagoDefault,) : PagoSuscripcion {
        const pagoSuscripcion = new PagoSuscripcion(); 

        pagoSuscripcion.montoTotal = getValorSuscripcionAPagar(suscriptor.tipoSuscripcion); 
        pagoSuscripcion.tipoSuscripcion = suscriptor.tipoSuscripcion;
        pagoSuscripcion.suscriptorPagador = suscriptor;
        pagoSuscripcion.creador = new CrearUsuariosPrueba().get1UsuarioObject();
        pagoSuscripcion.estadoPago = IEstadoPago.COMPLETADO;
        pagoSuscripcion.fechaCreacion = fecha
        pagoSuscripcion.metodoPago = metodoPago;   

        // Actualizar Fecha Vencimiento
        const nuevaFechaVencimiento =  suscriptor.actualizarFechaVencimiento(DiasActualizacionFechaVencimientoDefault, getMetodoActualizacionFechaVencimiento(suscriptor.tipoSuscripcion))
        nuevaFechaVencimiento;
        
        _customLogger.logDebug(`PagadorService Mock, Nuevo Pago, ${pagoSuscripcion.toString()}. NuevaFechaVencimiento=${nuevaFechaVencimiento} `)
        
        return pagoSuscripcion;
    }

    // Todo 
    CrearNuevoPagoSuscripcionOferta(suscriptor: Suscriptor): PagoSuscripcion{
        const pagoSuscripcionOferta = new PagoSuscripcion();

        
        return pagoSuscripcionOferta; 
    }


    CrearNuevoPagoMatricula(suscriptor: Suscriptor): NuevoPago {
        throw new Error("Method not implemented.");
    }

    
    CrearNuevoPagoProducto(): NuevoPago {
        throw new Error("Method not implemented.");
    }

    CrearNuevoPagoExtraordinario(): NuevoPago {
        throw new Error("Method not implemented.");
    }
    
}


/**
 * Conocer el monto  total de la suscripcion segun el tipo de suscripcion.
 * @param tipoSuscripcion : ITipoSuscripcion
 * @returns Valor de la suscripcion
 */
function getValorSuscripcionAPagar(tipoSuscripcion : ITiposuscripcion) : IValorTipoSuscripcion{
        
    if (tipoSuscripcion = ITiposuscripcion.PREMIUM) {
        return IValorTipoSuscripcion.PREMIUM;         
    } else if (tipoSuscripcion = ITiposuscripcion.GOLD) {
        return IValorTipoSuscripcion.GOLD;
    } else if (tipoSuscripcion = ITiposuscripcion.PLATINUM) {
        return IValorTipoSuscripcion.PLATINUM;
    } else  {  
        return IValorTipoSuscripcion.FREE; 
    }
    
}


/**
 * Cada tipoSuscripcion, tiene adherido un metodo de actualizar la fecha vencimiento. En base al tipoSuscripcion, se retorna el metodo.
 * @param tipoSuscripcion : ITipoSuscripcion
 * @returns Metodo de actualizacion de la fecha vencimiento del suscriptor.
 */
function getMetodoActualizacionFechaVencimiento(tipoSuscripcion : ITiposuscripcion) : IMetodoActualizacionFechaVencimiento{
        
    if (tipoSuscripcion = ITiposuscripcion.PREMIUM) {
        return IMetodoActualizacionFechaVencimiento.FECHAVENCIMIENTOSUSCRIPCION    
    } else if (tipoSuscripcion = ITiposuscripcion.GOLD) {
        return IMetodoActualizacionFechaVencimiento.ULTIMOPAGO
    } else if (tipoSuscripcion = ITiposuscripcion.PREMIUM) {
        return IMetodoActualizacionFechaVencimiento.FECHAVENCIMIENTOSUSCRIPCION
    } else {  
        return IMetodoActualizacionFechaVencimiento.FECHAVENCIMIENTOSUSCRIPCION
    }
    
}




// private _pagosList: Array<Pago>;
    
//     constructor() {
//             this._pagosList = new CrearPagos().obtenerLista3Pagos();
//         }
    
//     VerTodosLosPagos() {
//     }


// Todo: Completar.
// Pagar 2 metodos diferentes.
// let metodo = new MetodoPago()
// metodo.efectivo = 2000
// metodo.tarjeta = 3000
// pagoSuscripcion.pagarDosMetodosPagoDiferentes(metodo)
