

export enum IRol{
    PAYMENTMAKER = "paymentMaker",
}


export class User {
    
    private _name: string; 
    private _rol: IRol

    constructor(name: string, rol : IRol) {
        this._name = name;
        this._rol = rol; 
    }

    get name(): string{
        return this._name;
    }

    get rol(): IRol{ 
        return this._rol;
    }

}

export class CreadorPagos {

    private _rolAvailable: IRol = IRol.PAYMENTMAKER;

    constructor() { }
    
    CreateNewPayment(usuario : User) {
       
        if (usuario.rol !== this._rolAvailable) {
            throw new Error("No tienes acceso a crear un pago")
        }
        
        console.log("Creando nuevo pago..")
    }

}


let dueño = new User("Dueño", IRol.PAYMENTMAKER)