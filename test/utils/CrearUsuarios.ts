
import { Usuario } from "../../app/models/main/usuario/Usuario";
export class CrearUsuarios{
    
    private _listaUsuarios: Array<Usuario>; 

    constructor() {
        this._listaUsuarios = [];
    }

    obtenerLista3Usuarios() {
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

    obtener1Usuario() {
        let usuario1 = new Usuario();
        usuario1.nombre = "Gimnasio Vikingo";
        usuario1.email = "vikingo@email.com";
        
        return usuario1;
    }
}