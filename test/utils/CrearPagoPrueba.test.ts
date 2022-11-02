import { CrearPagosPrueba } from "./CrearPagosPrueba";
import { CustomLogger } from "../../app/utils/CustomLogger";
import { montoTotalDefault } from "../../app/utils/ConfiguracionesENV";

let _customLogger = new CustomLogger();

describe('Escenario 01 - CREAR PAGOS ', () => {

    test('1.1 - getParticularCuantity - 5', () => {
      
        let crearPagos = new CrearPagosPrueba();

        let response = crearPagos.getParticularCuantityOfPagos(5);

        expect(response).toHaveLength(5)

    });

    // Default
    test('1.1 - RETORNAR 3 PAGOS', () => {
        let crearPagos = new CrearPagosPrueba();

        let response = crearPagos.get3PagosList()

        _customLogger.logDebug(`Desde CrearPago ${response}`)

        expect(response).toHaveLength(3)

    });


    test('1.2 - RETORNAR 1 PAGO - Verificar crear los id correctos', () => {
        let crearPagos = new CrearPagosPrueba();

        let response = crearPagos.get1PagoObject().montoTotal
        let creador = crearPagos.get1PagoObject().creador._id
        let suscriptorPagador = crearPagos.get1PagoObject().suscriptorPagador.id

        _customLogger.logDebug(`Desde CrearPago ${response}, Creador=${creador}, SuscriptorPagador=${suscriptorPagador}`)

        expect(response).toBe(montoTotalDefault)

    });
});
