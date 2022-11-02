import { IPagadorService } from "../interfaces/services/IPagadorService";
import { NuevoPago } from "../models/main/pago/NuevoPago";
import { Pago } from "../models/main/pago/Pago";
import { PagoSuscripcion } from "../models/main/pago/PagoSuscripcion";
import { Suscriptor } from "../models/main/suscriptor/Suscriptor";

export class PagadorService implements IPagadorService {

    CrearNuevoPagoSuscripcion(suscriptor: Suscriptor) : PagoSuscripcion{
        throw new Error("Method not implemented.");
    }
    
    CrearNuevoPagoMatricula(suscripcion: Suscriptor): NuevoPago {
        throw new Error("Method not implemented.");
    }
    
    CrearNuevoPagoProducto(): NuevoPago {
        throw new Error("Method not implemented.");
    }
    
    CrearNuevoPagoExtraordinario(): NuevoPago{
        throw new Error("Method not implemented.");
    }

}