import { IEstadoPago, IMetodoPago, ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../app/interfaces/ISuscripciones";
import { Pago } from "../../app/models/main/pago/Pago";
import { Suscriptor } from "../../app/models/main/suscriptor/Suscriptor";
import { Usuario } from "../../app/models/main/usuario/Usuario";
import { PagadorService } from "../../app/services/PagadorService";
import {CrearUsuarios} from "../utils/CrearUsuarios"
import { CustomLogger } from "../../app/utils/CustomLogger";
import { ActualizarEstadoSuscriptor } from "./ActualizaEstadoSuscriptorMock";
import { DiasActualizacionFechaVencimientoDefault } from "../../app/utils/ConfiguracionesENV";
import { IPagadorService } from "../../app/interfaces/services/IPagadorService";

let _customLogger = new CustomLogger(); 

export class PagadorServiceMock  implements IPagadorService {
        
    constructor() {}
   
    CrearNuevoPagoSuscripcion(suscriptor: Suscriptor) : Pago {
        const pago = new Pago(); 
            pago.montoTotal = getValorSuscripcionAPagar(suscriptor.tipoSuscripcion)
            pago.tipoSuscripcion = suscriptor.tipoSuscripcion;
            pago.suscriptorPagador = suscriptor;
            pago.creador = new CrearUsuarios().obtener1Usuario();
            pago.estadoPago = IEstadoPago.COMPLETADO;
            pago.fechaCreacion = new Date(2022,5,5);
            pago.metodoPago = IMetodoPago.EFECTIVO;
            pago.tipoPago = ITipoPago.PAGOSUSCRIPCION
        
        // Actualizar Fecha
          const nuevaFechaVencimiento = suscriptor.actualizarFechaVencimiento(DiasActualizacionFechaVencimientoDefault)
        nuevaFechaVencimiento;
        
        _customLogger.logDebug(`PagadorService Mock, Nuevo Pago, ${pago.toString()}. NuevaFechaVencimiento=${nuevaFechaVencimiento} `)
        
        return pago;
    }

    CrearNuevoPagoMatricula(suscripcion: Suscriptor): Pago {
        throw new Error("Method not implemented.");
    }
    CrearNuevoPagoProducto(): Pago {
        throw new Error("Method not implemented.");
    }
    
    
}



function getValorSuscripcionAPagar(tipoSuscripcion : ITiposuscripcion) : IValorTipoSuscripcion{
        
    if (tipoSuscripcion = ITiposuscripcion.PREMIUM) {
        return IValorTipoSuscripcion.PREMIUM;         
    } else if (tipoSuscripcion = ITiposuscripcion.GOLD) {
        return IValorTipoSuscripcion.GOLD;
    } else if (tipoSuscripcion = ITiposuscripcion.PLATINUM) {
        return IValorTipoSuscripcion.PLATINUM;
    } else  {  
        return IValorTipoSuscripcion.VOID; 
    }
    
}




// private _pagosList: Array<Pago>;
    
//     constructor() {  
//             this._pagosList = new CrearPagos().obtenerLista3Pagos();
//         }
    
//     VerTodosLosPagos() {    
//     }