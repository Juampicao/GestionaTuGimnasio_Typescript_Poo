import { ErrorExternoAlPasarParams } from "../../error/ErrorExternoAlPasarParams";
import { ITiposuscripcion, IValorTipoSuscripcion } from "../../interfaces/ISuscripciones";
import {  suscripcionNombreDefault, suscripcionValorDefault } from "../../utils/ConfiguracionesENV";

export class Suscripcion {

    public _nombre: ITiposuscripcion;
    public _valor: IValorTipoSuscripcion;

    constructor() {
        this._nombre = suscripcionNombreDefault;
        this._valor = suscripcionValorDefault;
    }

    //* Nombre
    set nombre(nombre: ITiposuscripcion) {
        this._nombre = nombre
    }

    get nombre() {
        return this._nombre;
    }

    //* Valor
    set valor(valor: IValorTipoSuscripcion) {
        if (valor < 0) {
            throw new ErrorExternoAlPasarParams(`No puede ser menor a 0`);
        }

        this._valor = valor;
    }

    get valor() {
        return this._valor;
    }

    
}