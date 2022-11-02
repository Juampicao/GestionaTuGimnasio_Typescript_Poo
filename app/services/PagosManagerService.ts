import { IPagosManagerService } from "../interfaces/services/IPagosManagerService";
import { NuevoPago } from "../models/main/pago/NuevoPago";
import { PagoFilter } from "../models/filter/PagoFilter";

export class PagosManagerService implements IPagosManagerService{
    
    getPagosItemsByFilter(filter: PagoFilter): NuevoPago[] {
        throw new Error("Method not implemented.");
    }
    
}