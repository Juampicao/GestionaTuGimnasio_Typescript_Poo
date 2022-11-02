import { IGenero } from "../../interfaces/ISuscripciones";

export class SuscriptorFilter {

    private _nombre: string;
    private _apellido: string;
    private _dni: number;
    private _socio: number;
    private _genero: IGenero;
    private _data: string;

    constructor() { 
        this._nombre = "";
        this._apellido = "";
        this._dni = 0;
        this._socio = 0;
        this._genero = IGenero.VOID;
        this._data = "";
    
    }
    
    /**
     * @params data: nombre/apellido/dni/socio
     * Todo: Completar desde SuscriptorContainsData dni y socio.
     */
    set data(data: string) {
        this._data = data;
    }

    get data(): string{
        return this._data;
    }

    //* Genero
    set genero(genero: IGenero) {
        this._genero = genero;
    }

    get genero(): IGenero{
        return this._genero;
    }

   
    // Todo Dni
    // Todo Socio
   

    toString(): string{
        return `SuscriptorFilter: Data=${this.data}, nombre=${this._nombre}, apellido=${this._apellido}, dni=${this._dni}, genero=${this._genero},socio=${this._socio}`
    }
}