import { CrearPagos } from "./CrearPagos";
import { CustomLogger } from "../../app/utils/CustomLogger";
import { montoTotalDefault } from "../../app/utils/ConfiguracionesENV";

let _customLogger = new CustomLogger();

describe('Escenario 01 - CREAR PAGOS ', () => {

    // Default
    test('1.1 - RETORNAR 3 PAGOS', () => {
        let crearPagos = new CrearPagos();

        let response = crearPagos.obtenerLista3Pagos()

        _customLogger.logDebug(`Desde CrearPago ${response}`)

        expect(response).toHaveLength(3)

    });


    test('1.2 - RETORNAR 1 PAGO - Verificar crear los id correctos', () => {
        let crearPagos = new CrearPagos();

        let response = crearPagos.obtener1Pago().montoTotal
        let creador = crearPagos.obtener1Pago().creador._id
        let suscriptorPagador = crearPagos.obtener1Pago().suscriptorPagador.id

        _customLogger.logDebug(`Desde CrearPago ${response}, Creador=${creador}, SuscriptorPagador=${suscriptorPagador}`)

        expect(response).toBe(montoTotalDefault)

    });
});
