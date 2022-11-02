import { EjercicioGeneral } from "./EjercicioGeneral";


/**
 * Es el ejercicio de suscriptor. Se completa al elegir un ejercicio general y agregando especificaciones.
 */
export class EjercicioSuscriptor {
    
    private _ejercicio: EjercicioGeneral;
    private _repeticiones: number;
    private _series: number;
   
    constructor() { 
       
    }

    /**
     * @Params ejercicio: un ejercicio general existente.
     */
    set ejercicio(ejercicio: EjercicioGeneral) {
        this._ejercicio = ejercicio;
    }

    get ejercicio(): EjercicioGeneral{
        return this._ejercicio;
    }

    //* Repeticiones
    set repeticiones(repeticiones: number) {
        this._repeticiones = repeticiones
    }

    get repeticiones(): number{
        return this._repeticiones;
    }

    //* Series
    set series(series: number) {
        this._series = series;
    }

    get series(): number{
        return this._series;
    }
   
}