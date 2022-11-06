import { Usuario } from "../../../app/models/main/usuario/Usuario";

export abstract class Product {
    
    private _name: string;
    private _cuantity: number;
    private _id: number;
    private _creador: Usuario;

    constructor() { }; 
    
}