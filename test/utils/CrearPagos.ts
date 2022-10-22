
import { Pago } from "../../app/models/main/pago/Pago";
import { Suscriptor } from "../../app/models/main/suscriptor/Suscriptor";
import { Usuario } from "../../app/models/main/usuario/Usuario";

export class CrearPagos{
    
    private _listaPagos: Array<Pago>; 

    constructor() {
        this._listaPagos = [];
    }

    obtenerLista3Pagos() {
        let pago1 = new Pago();
        pago1.suscriptorPagador = new Suscriptor();
        pago1.creador = new Usuario();
        
        let pago2 = new Pago();
        pago2.suscriptorPagador = new Suscriptor();
        pago2.creador = new Usuario();

        let pago3 = new Pago();
        pago3.suscriptorPagador = new Suscriptor();
        pago3.creador = new Usuario();


        this._listaPagos.push(pago1, pago2, pago3)
        
        return this._listaPagos;
    }

    obtener1Pago() {
        let pago1 = new Pago();
        pago1.suscriptorPagador = new Suscriptor();
        pago1.creador = new Usuario();
        
        return pago1;
    }
}

