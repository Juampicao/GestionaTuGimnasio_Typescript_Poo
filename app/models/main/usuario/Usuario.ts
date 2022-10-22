import { generatePassword, generateUsuarioId } from "../../../utils/helpers";

export class Usuario{
    private _nombre: string;
    private _email: string;
    private _password: string;
    public _id: number;
    
    constructor() {
        this._password = generatePassword(10);
        this._id = generateUsuarioId()
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre() : string {
        return this._nombre
    }
    
    // Email
    set email(email: string) {
        this._email = email; 
    }
    
    get email() : string {
        return this._email;
    }
    
    // Id
    get id() : number {
        return this._id;
    }
    

}