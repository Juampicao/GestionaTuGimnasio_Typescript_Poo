import { NuevoPago } from "../../models/main/pago/NuevoPago";
import { PagoFilter } from "../../models/filter/PagoFilter";

export interface IPagosManagerService{
 
    getPagosItemsByFilter(filter : PagoFilter): NuevoPago[];

}