import { Pago } from "../../models/main/pago/Pago";
import { Suscriptor } from "../../models/main/suscriptor/Suscriptor";

export interface IPagadorService{
    
    CrearNuevoPagoSuscripcion: (suscriptor : Suscriptor) => Pago, 

    CrearNuevoPagoMatricula(suscripcion: Suscriptor) :  Pago, 

    //Todo: @Params Producto: Producto => Pago. 
    CrearNuevoPagoProducto() : Pago;

}