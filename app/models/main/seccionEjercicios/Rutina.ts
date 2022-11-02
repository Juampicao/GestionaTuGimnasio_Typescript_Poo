import { EjercicioGeneral } from "./EjercicioGeneral";

export class Rutina{

    private _ejercicio: EjercicioGeneral;


    constructor() { }
    
    //* Ejercicio
    set ejercicio(ejercicio: EjercicioGeneral) {
        this._ejercicio = ejercicio
    }

    get ejercicio(): EjercicioGeneral{
        return this._ejercicio;
    }


}

// Ejercicio gimnasio
// Ejercicio Suscriptor
    // Ejercicio gimnasio con series,repeticiones, dias. 
// Rutina
    // Todos los ejercicios Suscriptor. 