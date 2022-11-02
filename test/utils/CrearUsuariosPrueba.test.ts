import { CustomLogger } from "../../app/utils/CustomLogger";
import { CrearUsuariosPrueba } from "./CrearUsuariosPrueba";

let _customLogger = new CustomLogger();

describe('Escenario 01 - CREAR USUARIOS ', () => {

    test('1.1 - getParticularCuantity - 5', () => {
      
        let crearUsuarios = new CrearUsuariosPrueba();

          let response = crearUsuarios.getParticularCuantityOfUsuariosBasicos(5);

        expect(response).toHaveLength(5)

    });

    
    test('1.2 - get1UsuarioObject ', () => {
      
        let crearUsuarios = new CrearUsuariosPrueba();

        let response = crearUsuarios.get1UsuarioObject();

        expect(response.nombre).toBe("Gimnasio Vikingo")

    });

    
    test('1.3 - getParticularCuantity - 3', () => {
      
        let crearUsuarios = new CrearUsuariosPrueba();

        let response = crearUsuarios.get3UsuariosList();

        expect(response).toHaveLength(3)

    });
});