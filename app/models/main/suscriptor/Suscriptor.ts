import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { IEstadoSuscriptor, ITiposuscripcion } from "../../../interfaces/ISuscripciones";
import { DiasActualizacionFechaVencimientoDefault, estadoSuscriptorDefault, maxFechaNacimiento, minFechaNacimiento, suscripcionDefault, suscripcionNombreDefault } from "../../../utils/ConfiguracionesENV";
import { generateNumeroSocio, generateSuscriptorId, sumarDiasAFechas } from "../../../utils/helpers";
import { Suscripcion } from "../../helpers/suscripcion/Suscripcion";

//! Obligar a completar los campos desde aca. Sino, throw error campos vacios.

export  class Suscriptor {
    
    private _nombre: string;
    private _apellido: string;
    private _fechaNacimiento: Date;
    private _dni: number;
    private _estado: IEstadoSuscriptor;
    private _tipoSuscripcion: ITiposuscripcion; 
    private _numeroSocio: number;
    private _id: number;
    private _fechaVencimientoSuscripcion: Date;
    
    constructor() {
        this._estado = estadoSuscriptorDefault;
        this._numeroSocio = generateNumeroSocio();
        this._tipoSuscripcion = suscripcionNombreDefault;
        this._id = generateSuscriptorId();
        this._fechaVencimientoSuscripcion = new Date();
    }

    //* Nombre
    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }

    //* Apellido
    set apellido(apellido: string) {
        this._apellido = apellido;
    }

    get apellido() {
        return this._apellido;
    }

    //* Fecha Nacimiento
    set fechaNacimiento(fechaNacimiento: Date) {
        if (fechaNacimiento < minFechaNacimiento || fechaNacimiento > maxFechaNacimiento) {
            throw new ErrorExternoAlPasarParams(`No puede existir una fecha de nacimiento menor a ${minFechaNacimiento} o mayor a ${maxFechaNacimiento}`)
        }
        this._fechaNacimiento = fechaNacimiento;
    }

    get fechaNacimiento() {
        return this._fechaNacimiento;
    }

    //* Dni
    set dni(dni: number) {
        this._dni = dni;
    }

    get dni() {
        return this._dni;
    }

    //* Estado 
    set estado(estado: IEstadoSuscriptor) {
        this._estado = estado;
    }

    get estado(): IEstadoSuscriptor{
        return this._estado;
    }

    //* Tipo Suscripcion
    set tipoSuscripcion(tipoSuscripcion : ITiposuscripcion) {
        this._tipoSuscripcion = tipoSuscripcion;
    }

    get tipoSuscripcion() : ITiposuscripcion {
        return this._tipoSuscripcion;
    }

    //* Socio
    get numeroSocio(){
        return this._numeroSocio;
    }

    //Todo: :number o iSuscriptorId. Aca esta bien resuelto. Devuelvo un numero, no un objeto.
    //* Id
    get id() : number {
        return this._id
    }

    //* Fecha Vencimiento Suscripcion
    set fechaVencimientoSuscripcion(fechaVencimientoSuscripcion: Date) {
        this._fechaVencimientoSuscripcion = fechaVencimientoSuscripcion;
    }

    get fechaVencimientoSuscripcion(): Date{
        return this._fechaVencimientoSuscripcion;
    }

    /**
     * ? Actualiza la fecha de vencimiento y cambia el estado del suscriptor.
     * @param diasAActualizar : numero dias que quiero sumarle a la fecha de vencimiento.
     * @returns nueva fecha de vencimiento.
     */
    actualizarFechaVencimiento(diasAActualizar: number = DiasActualizacionFechaVencimientoDefault) {
       
        const nuevaFecha = sumarDiasAFechas(this._fechaVencimientoSuscripcion, diasAActualizar)
        
        this._fechaVencimientoSuscripcion = nuevaFecha;

        if (nuevaFecha.toDateString() <= new Date().toDateString()) {
            this._estado = IEstadoSuscriptor.ACTIVO;
        }

        return this._fechaVencimientoSuscripcion;
    }

    toString(): string {
        return `Suscriptor: nombre=${this._nombre}, apellido=${this._apellido}, dni=${this._dni}, estado=${this._estado}, fechaNacimiento=${this._fechaNacimiento}, id=${this._id}, numeroSocio=${this._numeroSocio}, tipoSuscripcion=${this._tipoSuscripcion}`
    }
}

// Tip. Lo que es seguro, es que va a devolver algo si o si, no cualquier cosa. EL problema esta aca detro, no le llevo el problema afuera.
// Tip : Que el codigo no sea un flan. Encapsular