import { IPagadorService } from "../interfaces/services/IPagadorService";
import { Pago } from "../models/main/pago/Pago";
import { Suscriptor } from "../models/main/suscriptor/Suscriptor";

export class PagadorService implements IPagadorService {
    
    CrearNuevoPagoMatricula(suscripcion: Suscriptor): Pago {
        throw new Error("Method not implemented.");
    }

    
    //Todo: @Params Producto: Producto => Pago.
    CrearNuevoPagoProducto(): Pago {
        throw new Error("Method not implemented.");
    }
    

    CrearNuevoPagoSuscripcion: (suscriptor: Suscriptor) => Pago;
    
    

}