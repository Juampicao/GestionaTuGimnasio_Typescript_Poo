import { Usuario } from "../../../app/models/main/usuario/Usuario";
import { CustomLogger } from "../../../app/utils/CustomLogger";

let _customLogger = new CustomLogger();

// ? - - - - - - - - - - - - - - USUARIO - - - - - - - - - - - - - - //
describe('Escenario 01 - USUARIO -ID', () => {

  // Default
    test('1.1 -  DEFAULT', () => {
      let usuario = new Usuario();

      _customLogger.logDebug(`El usuario id :${usuario.id}`)

      expect(usuario.id).not.toBeNull();
    });
});
