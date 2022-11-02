import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { IMusculo } from "../../../interfaces/InterfaceEjercicios";
import { CustomLogger } from "../../../utils/CustomLogger";
import { generateEjercicioId } from "../../../utils/helpers";
import { Usuario } from "../usuario/Usuario";

let _customLogger = new CustomLogger();

export class EjercicioGeneral{
    
    protected _nombre: string;
    private _explicacion: string;
    private _video: string;
    private _musculos: Array<IMusculo>; 
    private _creador: Usuario;
    private _id: number; 


    constructor()
    {    
        this._id = generateEjercicioId();
    }

    //* Nombre
    set nombre(nombre: string) {
        this._nombre = nombre
    }

    get nombre(): string{
        return this._nombre
    }

    //* Explicacion
    set explicacion(explicacion: string) {
        this._explicacion = explicacion;
    }

    get explicacion(): string{
        return this._explicacion;
    }

    //* Video
    set video(urlVideo: string) {
        this._video = urlVideo;
    }

    get video(): string{
        return this._video;
    }

    //* Musculo
    set musculos(musculos: Array<IMusculo>) {
        this._musculos = musculos;
    }

    get musculos(): Array<IMusculo>{
        return this._musculos;
    }

    addMusculos(musculo: IMusculo) {
        if (this._musculos.toString().toLowerCase().includes(musculo)) {
            throw new ErrorExternoAlPasarParams(`Ya existe este musculo en el ejercicio`)
        }
        this._musculos.push(musculo)
    }
    
    removeMusculo(musculo: IMusculo) {
        var index = this._musculos.indexOf(musculo);
        this._musculos.splice(index, 1);
        
        _customLogger.logDebug(`EL musculo${musculo} se ha eliminado correctamente.`)
    }

    //* Creador
    set creador(creador: Usuario) {
        this._creador = creador;
    }

    get creador(): Usuario{
        return this._creador;
    }

    //* Id
    get id(): number{
        return this._id;
    }

    

    toString(): string{
        return `Ejercicio: Nombre=${this._nombre}, Musculos=${this._musculos}, Explicacion=${this._explicacion}, Video=${this._video}, Creador=${this._creador}, ID=${this._id}`
    }
}