
import { IMusculo } from "../../app/interfaces/InterfaceEjercicios";
import { IMetodoPago } from "../../app/interfaces/ISuscripciones";
import { Pago } from "../../app/models/main/pago/Pago";
import { PagoSuscripcion } from "../../app/models/main/pago/PagoSuscripcion";
import { EjercicioGeneral } from "../../app/models/main/seccionEjercicios/EjercicioGeneral";
import { Suscriptor } from "../../app/models/main/suscriptor/Suscriptor";
import { Usuario } from "../../app/models/main/usuario/Usuario";

export class CrearEjercicioGeneral{
    
    private _listaEjercicios: Array<EjercicioGeneral>; 

    constructor() {
        this._listaEjercicios = [];
    }

    obtenerLista3Ejercicios() : Array<EjercicioGeneral> {
        let ejercicio1 = new EjercicioGeneral();
        ejercicio1.nombre = "Bicep Curl"
        ejercicio1.explicacion = "Se hace con mancuernas"
        ejercicio1.musculos = [IMusculo.ABDOMINALES, IMusculo.BICEP];

        let ejercicio2 = new EjercicioGeneral();
        ejercicio2.nombre = "Triceps con Barra"
        ejercicio2.explicacion = "Se hace con pesas"
        ejercicio2.musculos = [IMusculo.CUADRICEPS, IMusculo.TRICEP]

        this._listaEjercicios.push(ejercicio1,ejercicio2)
        
        return this._listaEjercicios;
    }

    obtener1Ejercicio() : EjercicioGeneral{
        let ejercicio1 = new EjercicioGeneral();
        ejercicio1.nombre = "Bicep Curl"
        ejercicio1.explicacion = "Se hace con mancuernas"
        ejercicio1.musculos = [IMusculo.ABDOMINALES, IMusculo.BICEP];
        return ejercicio1
    }
}

