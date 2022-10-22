import { CustomLogger } from "../../app/utils/CustomLogger";
import { CrearUsuarios } from "./CrearUsuarios";

let _customLogger = new CustomLogger();

describe('Escenario 01 - CREAR USUARIOS ', () => {

    // Default
    test('1.1 - RETORNAR 3 USUARIOS', () => {
        let crearUsuarios = new CrearUsuarios();

        let response = crearUsuarios.obtenerLista3Usuarios()

        _customLogger.logDebug(`Desde CrearUsuarios ${response}`)

        expect(response).toHaveLength(3)

    });

      test('1.2 - RETORNAR 1 USUARIOS', () => {
        let crearUsuarios = new CrearUsuarios();

        let usuario1 = crearUsuarios.obtener1Usuario()

        _customLogger.logDebug(`Desde CrearUsuarios ${usuario1}`)

        expect(usuario1.nombre).toBe("Gimnasio Vikingo")
        expect(usuario1.email).toBe("vikingo@email.com")
          

    });
});