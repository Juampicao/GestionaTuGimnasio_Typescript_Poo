import { EjercicioGeneral } from "../../models/main/seccionEjercicios/EjercicioGeneral";
import { EjercicioSuscriptor } from "../../models/main/seccionEjercicios/EjercicioSuscriptor";

export interface ICreadorEjerciciosYRutinasService {
    
    CrearNuevoEjercicioGeneral(ejercicioGeneral: EjercicioGeneral): any,

    CrearNuevoEjercicioSuscriptor(ejercicioSuscriptor: EjercicioSuscriptor): any,
}