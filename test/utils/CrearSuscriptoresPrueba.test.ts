import {  ITiposuscripcion } from "../../app/interfaces/ISuscripciones";
import { CustomLogger } from "../../app/utils/CustomLogger";
import { CrearSuscriptoresPrueba } from "./CrearSuscriptoresPrueba";

let _customLogger = new CustomLogger();


describe('Escenario 01 - CREAR SUSCRIPTORES ', () => {

    test('1.1 - getParticularCuantity - 5 ', () => {
        let crearSuscriptores = new CrearSuscriptoresPrueba();

        let response = crearSuscriptores.getParticularCuantityOfSuscriptoresBasicos(5)

        expect(response).toHaveLength(5)

    });

    test('1.2 - get 3 suscriptores list  ', () => {
        let crearSuscriptores = new CrearSuscriptoresPrueba();

        let response = crearSuscriptores.get3SuscriptoresList()

        _customLogger.logDebug(`Desde CrearSuscriptores ${response}`)

        expect(response).toHaveLength(3)

    });

    test('1.3 - RETORNAR 1 SUSCRIPTOR', () => {
        let crearSuscriptores = new CrearSuscriptoresPrueba();

        let suscriptor1 = crearSuscriptores.get1SuscriptorObject()

        _customLogger.logDebug(`Desde CrearSuscriptores ${suscriptor1}`)

        expect(suscriptor1.nombre).toBe("Juan Pablo")
        expect(suscriptor1.tipoSuscripcion).toBe(ITiposuscripcion.PREMIUM)
        expect(suscriptor1.estado).toBe("deudor")
          

    });
});