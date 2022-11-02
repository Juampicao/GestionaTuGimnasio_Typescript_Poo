
import { ICreadorEjerciciosYRutinasService } from "../../../app/interfaces/services/ICreadorEjerciciosYRutinasService";
import { EjercicioGeneral } from "../../../app/models/main/seccionEjercicios/EjercicioGeneral";
import { EjercicioSuscriptor } from "../../../app/models/main/seccionEjercicios/EjercicioSuscriptor";


export class CreadorEjerciciosYRutinasMockService implements ICreadorEjerciciosYRutinasService {
        
    constructor() { }

    //Todo Deberia recibir ejercicoGeneral y ejercicioSuscriptor para suscriptor.agregarEjercicio(ejercico).
    //? O Debería resolverse en el suscriptor y desde aca enviar los 2?
    CrearNuevoEjercicioGeneral(ejercicioGeneral: EjercicioGeneral) {
        throw new Error("Method not implemented.");
    }
    CrearNuevoEjercicioSuscriptor(ejercicioSuscriptor: EjercicioSuscriptor) {
        throw new Error("Method not implemented.");
    }

    // CrearNuevoPagoSuscripcion(suscriptor: Suscriptor): PagoSuscripcion {
    //     const pagoSuscripcion = new PagoSuscripcion();
    //     pagoSuscripcion.montoTotal = getValorSuscripcionAPagar(suscriptor.tipoSuscripcion)
    //     pagoSuscripcion.tipoSuscripcion = suscriptor.tipoSuscripcion;
    //     pagoSuscripcion.suscriptorPagador = suscriptor;
    //     pagoSuscripcion.creador = new CrearUsuarios().obtener1Usuario();
    //     pagoSuscripcion.estadoPago = IEstadoPago.COMPLETADO;
    //     pagoSuscripcion.fechaCreacion = new Date(2022, 5, 5);
    //     pagoSuscripcion.metodoPago = IMetodoPago.EFECTIVO;
    // }
};