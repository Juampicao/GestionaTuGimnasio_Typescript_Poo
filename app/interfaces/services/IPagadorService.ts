import { NuevoPago } from "../../models/main/pago/NuevoPago";
import { Pago } from "../../models/main/pago/Pago";
import { PagoSuscripcion } from "../../models/main/pago/PagoSuscripcion";
import { Suscriptor } from "../../models/main/suscriptor/Suscriptor";

export interface IPagadorService{
    
    CrearNuevoPagoSuscripcion(suscriptor : Suscriptor) : PagoSuscripcion, 

    CrearNuevoPagoMatricula(suscripcion: Suscriptor) :  NuevoPago, 

    CrearNuevoPagoProducto(producto: any): NuevoPago;
    
    CrearNuevoPagoExtraordinario(motivo: any): NuevoPago;

}