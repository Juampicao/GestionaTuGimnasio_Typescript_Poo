import { IRol, User } from "./Pruebas";

export class CreadorPagos{
    private _rolAvailable: Array<IRol> = [IRol.PAYMENTMAKER]  

    constructor() { }
    
    CreateNewPayment(usuario : User) {
    if (usuario.rol !== IRol.PAYMENTMAKER) {
        throw new Error("No tienes acceso a crear un pago")
    }
        
    console.log("Creando nuevo pago..")
}

}