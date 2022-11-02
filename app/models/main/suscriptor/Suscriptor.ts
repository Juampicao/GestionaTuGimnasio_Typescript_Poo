import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { IEstadoSuscriptor, IGenero, IMetodoActualizacionFechaVencimiento, ITiposuscripcion } from "../../../interfaces/ISuscripciones";
import { DiasActualizacionFechaVencimientoDefault, estadoSuscriptorDefault, maxFechaNacimiento, MetodoActualizacionVencimientoDefault, minFechaNacimiento, suscripcionDefault, suscripcionNombreDefault } from "../../../utils/ConfiguracionesENV";
import { CustomLogger } from "../../../utils/CustomLogger";
import { generateNumeroSocio, generateSuscriptorId, sumarDiasAFechas } from "../../../utils/helpers";
import { EjercicioGeneral } from "../seccionEjercicios/EjercicioGeneral";
import { EjercicioSuscriptor } from "../seccionEjercicios/EjercicioSuscriptor";
import { Usuario } from "../usuario/Usuario";
//! Obligar a completar los campos desde aca. Sino, throw error campos vacios.

const _customLogger = new CustomLogger();

export  class Suscriptor {
    
    private _nombre: string;
    private _apellido: string;
    private _fechaNacimiento: Date;
    private _dni: number;
    private _genero: IGenero;
    private _estado: IEstadoSuscriptor;
    private _tipoSuscripcion: ITiposuscripcion; 
    private _numeroSocio: number;
    private _id: number;
    private _fechaVencimientoSuscripcion: Date;
    private _creador: Usuario;
    private _rutina: Array<EjercicioSuscriptor>;

    constructor() {
        this._nombre = "";
        this._apellido = "";
        this._dni = 1;
        this._genero = IGenero.VOID;
        this._estado = estadoSuscriptorDefault;
        this._numeroSocio = generateNumeroSocio();
        this._tipoSuscripcion = suscripcionNombreDefault;
        this._id = generateSuscriptorId();
        this._fechaVencimientoSuscripcion = new Date();
        this._rutina = [];
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

    //* Genero
    set genero(genero: IGenero) {
        this._genero = genero;
    }

    get genero(): IGenero{
        return this._genero;
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
     * ? Actualiza la fecha de vencimiento del suscriptor y cambia el estado del suscriptor en base al metodo de actualizacion de cada suscripcion.
     * @param diasAActualizar : numero dias que quiero sumarle a la fecha de vencimiento.
     * @param metodoActualizacion: metodo para actualizar la fecha vencimiento.
     * @returns nueva fecha de vencimiento.
     */
    actualizarFechaVencimiento(diasAActualizar: number = DiasActualizacionFechaVencimientoDefault, metodoActualizacion: IMetodoActualizacionFechaVencimiento = MetodoActualizacionVencimientoDefault) {
       
        if (metodoActualizacion = IMetodoActualizacionFechaVencimiento.FECHAVENCIMIENTOSUSCRIPCION) {
            this._fechaVencimientoSuscripcion = sumarDiasAFechas(this._fechaVencimientoSuscripcion, diasAActualizar)
        } else {
            let fechaPagoHoy = new Date();
            this._fechaVencimientoSuscripcion = sumarDiasAFechas(fechaPagoHoy, diasAActualizar)
        }

        if (this._fechaVencimientoSuscripcion.toDateString() <= new Date().toDateString()) {
            this._estado = IEstadoSuscriptor.ACTIVO;
        }

        return this._fechaVencimientoSuscripcion;
    }

    // contain nombre or apellido or dni or socio
    containsData(data: string ): Boolean{
               
            if (this._nombre.toLowerCase().includes(data.toLowerCase())) {
                return true;
            } else if (this._apellido.toLowerCase().includes(data.toLocaleLowerCase())){
                return true;
            } else {
                return false;
            }
            
            // Todo DNI => Permitir | number.
            // Todo SOCIO
        // if (data = typeof String) {
        //     if (this._nombre.toLowerCase().includes(data.toLowerCase())) {
        //         return true;
        //     } else if (this._apellido.toLowerCase().includes(data.toLocaleLowerCase())){
        //         return true;
        //     }         
        // } else if (data = typeof Number){
        //     if (this._dni.toString().includes(data)) {
        //         return true
        //     } else if (this._numeroSocio.toString().includes(data)) {
        //         return false;
        //     }    
        // } return false
        
    }

    //* Creador
    set creador(creador: Usuario) {
        this._creador = creador;
    }
    
    get creador(): Usuario{
        return this._creador;
    }

    //*Rutina
 
    
    addEjerciciToRutina(ejercicio: EjercicioSuscriptor) {
        //! Si exista throw error.
        // if (this._rutina.toString().toLowerCase().includes(ejercicio)) {
        //     throw new ErrorExternoAlPasarParams(`Ya existe este ejercicio en la rutina`)
        // }
       
        this._rutina.push(ejercicio);
    }
    
    removeEjercicioFromRutina(ejercicio: EjercicioSuscriptor) {
        var index = this._rutina.indexOf(ejercicio);
        this._rutina.splice(index, 1);
        
        _customLogger.logDebug(`EL ejercicio${ejercicio} se ha eliminado correctamente.`)
    }

    asignarEjercicioASuscriptor(ejercicioGeneral: EjercicioGeneral, ejercicioSuscriptor: EjercicioSuscriptor) {
        
        const ejercicio = ejercicioSuscriptor;

        // Agregar 
        this.addEjerciciToRutina(ejercicio);
    }

    get rutina(): Array<EjercicioSuscriptor>{
        return this._rutina;
    }

    toString(): string {
        return `Suscriptor: nombre=${this._nombre}, apellido=${this._apellido}, dni=${this._dni}, estado=${this._estado}, fechaNacimiento=${this._fechaNacimiento}, id=${this._id}, numeroSocio=${this._numeroSocio}, tipoSuscripcion=${this._tipoSuscripcion}`
    }
}






    //? Funcion vieja que anda bien
    //    actualizarFechaVencimiento(diasAActualizar: number = DiasActualizacionFechaVencimientoDefault, metodoActualizacion: IMetodoActualizacionFechaVencimiento = MetodoActualizacionVencimientoDefault) {
       
    
    //         const nuevaFecha = sumarDiasAFechas(this._fechaVencimientoSuscripcion, diasAActualizar)
            
    //         this._fechaVencimientoSuscripcion = nuevaFecha;            

      
    //     if (nuevaFecha.toDateString() <= new Date().toDateString()) {
    //         this._estado = IEstadoSuscriptor.ACTIVO;
    //     }

    //     return this._fechaVencimientoSuscripcion;
    // }