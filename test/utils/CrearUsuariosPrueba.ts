
import { Usuario } from "../../app/models/main/usuario/Usuario";
import { CustomLogger } from "../../app/utils/CustomLogger";

let customLogger = new CustomLogger() 

export class CrearUsuariosPrueba {
    
    private _listaUsuarios: Array<Usuario>;
    
    constructor() {
        this._listaUsuarios = [];
    }
    
    /**
     * Crear una lista de usuarios basicos para testear funcionalidades. Nombres Usuario[numero].
     * @param cantidad : numero
     * @returns Lista de usuarios con el length = cantidad. 
     */
    getParticularCuantityOfUsuariosBasicos(cantidad: number): Array<Usuario> {
        for (let i = 0; i < cantidad; i++){
            let usuario = new Usuario()
            usuario.nombre = `Usuario ${i + 1}`    
            this._listaUsuarios.push(usuario);
        }

       customLogger.logDebug(`Desde CrearUsuarios, la lista de usuario: ${this._listaUsuarios}`)
        return this._listaUsuarios; 
    }

    /**
     * Crea un usuario especifico para testear funcionalidades.
     * @returns Objeto de 1 usuario especifico.
     */
    get1UsuarioObject(): Usuario {
        
        let usuario1 = new Usuario();
        usuario1.nombre = "Gimnasio Vikingo";
        usuario1.email = "vikingo@email.com";

        return usuario1; 
    }

    /**
     * Crea una lista de 3 usuarios especificos para testear funcionalidades.
     * @returns Lista de 3 Usuarios especificos.
     */
    get3UsuariosList() : Array<Usuario> {
        let usuario1 = new Usuario();
        usuario1.nombre = "Gimnasio Vikingo";
        usuario1.email = "vikingo@email.com";
        
        let usuario2 = new Usuario();
        usuario2.nombre = "Gimnasio River";
        usuario2.email = "river@email.com";

        let usuario3 = new Usuario();
        usuario3.nombre = "Gimnasio Boca";
        usuario3.email = "boca@email.com";

        this._listaUsuarios.push(usuario1,usuario2, usuario3)
        
        return this._listaUsuarios;

    }
    
} 
    