import { ITiposuscripcion } from "../../app/interfaces/ISuscripciones";
import { Suscriptor } from "../../app/models/main/suscriptor/Suscriptor";

export class CrearSuscriptores{
    
    private _listaSuscriptores: Array<Suscriptor>; 

    constructor() {
        this._listaSuscriptores = [];
    }

    obtenerLista3Suscriptores() {
        let suscriptor1 = new Suscriptor();
        suscriptor1.nombre = "Juan Pablo"
        suscriptor1.tipoSuscripcion = ITiposuscripcion.PREMIUM;
        
        let suscriptor2 = new Suscriptor();
        suscriptor2.nombre = "Pedro"
        suscriptor2.tipoSuscripcion = ITiposuscripcion.GOLD;
        
        let suscriptor3 = new Suscriptor();
        suscriptor3.nombre = "Gonzalo"
        suscriptor3.tipoSuscripcion = ITiposuscripcion.PREMIUM
        
        this._listaSuscriptores.push(suscriptor1,suscriptor2, suscriptor3)
        
        return this._listaSuscriptores;
    }

    obtener1Suscriptor() {
        let suscriptor1 = new Suscriptor();
        suscriptor1.nombre = "Juan Pablo"
        suscriptor1.tipoSuscripcion = ITiposuscripcion.PREMIUM;
        suscriptor1.dni = 4555555;
        suscriptor1.fechaNacimiento = new Date(1999, 10, 10);
        suscriptor1.fechaVencimientoSuscripcion = new Date(2022, 10, 10);
        return suscriptor1;
    }
}