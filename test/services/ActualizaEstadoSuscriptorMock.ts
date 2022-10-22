// Al hueso. 1 suscriptor

import { Suscriptor } from "../../app/models/main/suscriptor/Suscriptor";


export class ActualizarEstadoSuscriptor{
    constructor() { }
    
    // 2° Verifica si la fecha es mayor, activo. Sino Deudor
    static actualizarPorSuscriptor(suscriptor: Suscriptor) {
        
        // Obtener la fechaVencimientoActual
        let fechaVencimientoActual = suscriptor.fechaVencimientoSuscripcion;

        // 2° Suma 30 dias a la fecha

        
        // 3°

    }
}