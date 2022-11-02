import { IMetodoPago } from "../../interfaces/ISuscripciones";
import { NuevoPago } from "../main/pago/NuevoPago";
import { PagoSuscripcion } from "../main/pago/PagoSuscripcion";
import { PagoFilter } from "../main/pagoFilter/PagoFilter";

// Todo: los atributos deberian ser la lista de array de IMetodoPago. Si el gimnasio quiere agregar nuevos, deberia poderse.
export class MetodoPago {

    private _tarjeta: number;
    private _efectivo: number;
    
    constructor() { }
    
    set tarjeta(montoTotal: number) {
        this._tarjeta = montoTotal
    }

    get tarjeta(): number{
        return this._tarjeta;
    }

    set efectivo(montoTotal: number) {
        this._efectivo = montoTotal;
    }
    
    get efectivo(): number{
        return this._efectivo;
    }

    montoTotalPagado() {
        return this._efectivo + this._tarjeta;
    }
}


let pago = new PagoSuscripcion()
let metodoPago= new MetodoPago()
metodoPago.efectivo = 1000;
metodoPago.tarjeta = 3000; 

pago.pagarDosMetodosPagoDiferentes(metodoPago)
