import { ICreadorEjerciciosYRutinasService } from "../interfaces/services/ICreadorEjerciciosYRutinasService";
import { EjercicioGeneral } from "../models/main/seccionEjercicios/EjercicioGeneral";
import { EjercicioSuscriptor } from "../models/main/seccionEjercicios/EjercicioSuscriptor";

export class CreadorEjerciciosYRutinasService implements ICreadorEjerciciosYRutinasService {
 
    CrearNuevoEjercicioSuscriptor(ejercicioSuscriptor: EjercicioSuscriptor) {
        throw new Error("Method not implemented.");
    }
   
    CrearNuevoEjercicioGeneral(ejercicioGeneral: EjercicioGeneral) {
        throw new Error("Method not implemented.");
    }
}
    