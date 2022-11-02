import { IGenero, ITiposuscripcion } from "../../app/interfaces/ISuscripciones";
import { Suscriptor } from "../../app/models/main/suscriptor/Suscriptor";
import { CustomLogger } from "../../app/utils/CustomLogger";

let customLogger = new CustomLogger();
export class CrearSuscriptoresPrueba {
    
    private _listaSuscriptores: Array<Suscriptor>; 

    constructor() {
        this._listaSuscriptores = [];
    }


    /**
     * Crear una lista de suscriptores basicos para testear funcionalidades. Nombres suscriptor[numero].
     * @param cantidad : numero
     * @returns Lista de usuarios con el length = cantidad. 
     */
    getParticularCuantityOfSuscriptoresBasicos(cantidad: number): Array<Suscriptor> {
        for (let i = 0; i < cantidad; i++){
            let suscriptor = new Suscriptor()
            suscriptor.nombre = `Suscriptor ${i + 1}`    
            this._listaSuscriptores.push(suscriptor);
        }

       customLogger.logDebug(`Desde CrearSuscriptores, la lista de suscriptores: ${this._listaSuscriptores}`)
        return this._listaSuscriptores; 
    }


    /**
    * Crea un suscriptor especifico para testear funcionalidades.
    * @returns Objeto de 1 usuario especifico.
    */
    get1SuscriptorObject(): Suscriptor {
        
        let suscriptor1 = new Suscriptor();
        suscriptor1.nombre = "Juan Pablo"
        suscriptor1.apellido = "gomez"
        suscriptor1.tipoSuscripcion = ITiposuscripcion.PREMIUM;
        suscriptor1.dni = 4555555;
        suscriptor1.genero = IGenero.MASCULINO;
        suscriptor1.fechaNacimiento = new Date(1999, 10, 10);
        suscriptor1.fechaVencimientoSuscripcion = new Date(2022, 10, 10);

        return suscriptor1;
    }

    /**
     * Crea una lista de 3 suscriptor especificos para testear funcionalidades.
     * @returns Lista de 3 suscriptores especificos.
     */
    get3SuscriptoresList() : Array<Suscriptor> {
        let suscriptor1 = new Suscriptor();
        suscriptor1.nombre = "Juan Pablo"
        suscriptor1.apellido = "Gomez"
        suscriptor1.dni = 11111111,
        suscriptor1.genero = IGenero.MASCULINO
        suscriptor1.tipoSuscripcion = ITiposuscripcion.PREMIUM;
        
        let suscriptor2 = new Suscriptor();
        suscriptor2.nombre = "Pedro"
        suscriptor2.genero = IGenero.MASCULINO
        suscriptor2.tipoSuscripcion = ITiposuscripcion.GOLD;
        
        let suscriptor3 = new Suscriptor();
        suscriptor3.nombre = "Gonzalo"
        suscriptor3.genero = IGenero.MASCULINO;
        suscriptor3.tipoSuscripcion = ITiposuscripcion.PREMIUM
        
        this._listaSuscriptores.push(suscriptor1,suscriptor2, suscriptor3)
        
        return this._listaSuscriptores;

    }
    // obtenerLista3Suscriptores() {
    //     let suscriptor1 = new Suscriptor();
    //     suscriptor1.nombre = "Juan Pablo"
    //     suscriptor1.apellido = "Gomez"
    //     suscriptor1.dni = 11111111,
    //     suscriptor1.genero = IGenero.MASCULINO
    //     suscriptor1.tipoSuscripcion = ITiposuscripcion.PREMIUM;
        
    //     let suscriptor2 = new Suscriptor();
    //     suscriptor2.nombre = "Pedro"
    //     suscriptor2.genero = IGenero.MASCULINO
    //     suscriptor2.tipoSuscripcion = ITiposuscripcion.GOLD;
        
    //     let suscriptor3 = new Suscriptor();
    //     suscriptor3.nombre = "Gonzalo"
    //     suscriptor3.genero = IGenero.MASCULINO;
    //     suscriptor3.tipoSuscripcion = ITiposuscripcion.PREMIUM
        
    //     this._listaSuscriptores.push(suscriptor1,suscriptor2, suscriptor3)
        
    //     return this._listaSuscriptores;
    // }

    // obtener1Suscriptor() {
    //     let suscriptor1 = new Suscriptor();
    //     suscriptor1.nombre = "Juan Pablo"
    //     suscriptor1.apellido = "gomez"
    //     suscriptor1.tipoSuscripcion = ITiposuscripcion.PREMIUM;
    //     suscriptor1.dni = 4555555;
    //     suscriptor1.genero = IGenero.MASCULINO;
    //     suscriptor1.fechaNacimiento = new Date(1999, 10, 10);
    //     suscriptor1.fechaVencimientoSuscripcion = new Date(2022, 10, 10);
    //     return suscriptor1;
    // }
}