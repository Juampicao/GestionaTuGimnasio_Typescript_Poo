import {  ITiposuscripcion } from "../../app/interfaces/ISuscripciones";
import { CustomLogger } from "../../app/utils/CustomLogger";
import { CrearSuscriptores } from "./CrearSuscriptores";

let _customLogger = new CustomLogger();


describe('Escenario 01 - CREAR SUSCRIPTORES ', () => {

    // Default
    test('1.1 - RETORNAR 3 SUSCRIPTORES', () => {
        let crearSuscriptores = new CrearSuscriptores();

        let response = crearSuscriptores.obtenerLista3Suscriptores()

        _customLogger.logDebug(`Desde CrearSuscriptores ${response}`)

        expect(response).toHaveLength(3)

    });

      test('1.2 - RETORNAR 1 SUSCRIPTOR', () => {
        let crearSuscriptores = new CrearSuscriptores();

        let suscriptor1 = crearSuscriptores.obtener1Suscriptor()

        _customLogger.logDebug(`Desde CrearSuscriptores ${suscriptor1}`)

        expect(suscriptor1.nombre).toBe("Juan Pablo")
        expect(suscriptor1.tipoSuscripcion).toBe(ITiposuscripcion.PREMIUM)
        expect(suscriptor1.estado).toBe("deudor")
          

    });
});