import { PagosManagerServiceMock } from "./PagosManagerServiceMock";
import { PagosManagerService } from "../../../app/services/PagosManagerService";
import { IPagosManagerService } from "../../../app/interfaces/services/IPagosManagerService";
import { CustomLogger } from "../../../app/utils/CustomLogger";
import { NuevoPago } from "../../../app/models/main/pago/NuevoPago";
import { PagoFilter } from "../../../app/models/filter/PagoFilter";
import { IMetodoPago, ITipoPago } from "../../../app/interfaces/ISuscripciones";
import { NoHayResultadosError } from "../../../app/error/NoHayResultadosError";
import { ErrorExternoAlPasarParams } from "../../../app/error/ErrorExternoAlPasarParams";


/**
 * 1) Tipo Pago
 * 2) Tipo Suscripcion
 * 3) Fecha Creacion
 * 4) Creador
 * 5) Metodo Pago
 */


// Inyeccion de dependencias.
function getService(instance: string = "original"): IPagosManagerService {
    if (instance === "original") {
        return new PagosManagerService();
    } else {
        return new PagosManagerServiceMock();
    }
}

let customlogger = new CustomLogger();


//? - - - - - - - - -  - - - TIPO PAGO  - - - - - - - - -  - - - //
describe('Escenario 1 - PAGOS MANAGER SERVICE MOCK - TIPO PAGO', () => {
   
   
    let servicioContentManager = getService("test"); 
   
    test('Caso 1.1 - Todas son suscripciones', () => {
    
        let filter = new PagoFilter();
        filter.tipoPago = ITipoPago.PAGOSUSCRIPCION
    
        let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)

        expect(response).toHaveLength(3);

    });

    test('Caso 1.2 - Ninguna', () => {
    
        try {      
            let filter = new PagoFilter();
            filter.tipoPago = ITipoPago.PAGOPRODUCTO
        
            let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)
            expect(response).toHaveLength(0);
        } catch (error) {
            expect(error).toBeInstanceOf(NoHayResultadosError)
        }

    });

});


//? - - - - - - - - -  - - - 2 TIPO SUSCRIPCION  - - - - - - - - -  - - - //
// Todo

//? - - - - - - - - -  - - - 3 FECHA CREACION  - - - - - - - - -  - - - //


describe('Escenario 3 - ServiceMock  - Fecha Creacion', () => {

    let servicioContentManager = getService("test");
   
    // Sin parametros
    test('Caso 3.1 - Buscar por fecha de creacion sin parametros', () => {
        
        let filter = new PagoFilter();
     
        let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)

        expect(response).toHaveLength(3);
    });

    // Ambos parametros 
    test('Caso 3.2 - 2 parametros', () => {
        
        let filter = new PagoFilter();
        filter.fechaCreacionSince = new Date(2014,1,1);
        filter.fechaCreacionUntil = new Date(2025, 10, 10);
        
        let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)

        expect(response).toHaveLength(2);
    });

    // Solo since
    test('Caso 3.3 - 2 parametros', () => {
        
        let filter = new PagoFilter();
        filter.fechaCreacionSince = new Date(2020, 10, 10);
        
        let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)

        expect(response).toHaveLength(1);
    });

    // Error de Since
    test('Caso 3.4 - Error al pasar params Since', () => {
        try {
            let filter = new PagoFilter();
            filter.fechaCreacionSince = new Date(1900, 10, 10);
            
            let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)
    
            expect(response).toHaveLength(1);
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
            
        }
    });

    // Sin Resultados.
    test('Caso 3.4 - Sin Resultados', () => {
        try {
            let filter = new PagoFilter();
            filter.fechaCreacionSince = new Date(2000, 10, 10);
            filter.fechaCreacionUntil = new Date(2005, 1, 1);
            let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)
    
            expect(response).toHaveLength(1);
        } catch (error) {
            expect(error).toBeInstanceOf(NoHayResultadosError)
            
        }
    });

});

//? - - - - - - - - -  - - - 4 CREADOR  - - - - - - - - -  - - - //
describe('Escenario 4 - ServiceMock  - Creador', () => {

    let servicioContentManager = getService("test");
   
    // Sin parametros
    test('Caso 4.1 - Sin parametros', () => {
        
        let filter = new PagoFilter();
     
        let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)

        expect(response).toHaveLength(3);
    });
});

//? - - - - - - - - -  - - - 5 METODO PAGO  - - - - - - - - -  - - - //
// Todo

describe('Escenario 5 - ServiceMock  - METODO PAGO', () => {

    let servicioContentManager = getService("test");
   
    // // Sin parametros
    // test('Caso 4.1 - Efectivo', () => {
        
    //     let filter = new PagoFilter();
    //     filter.metodoPago = IMetodoPago.EFECTIVO
     
    //     let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)

    //     expect(response).toHaveLength(2);
    // });

    // test('Caso 4.2 - Tarjeta', () => {
        
    //     let filter = new PagoFilter();
    //     filter.metodoPago = IMetodoPago.TARJETA
     
    //     let response: Array<NuevoPago> = servicioContentManager.getPagosItemsByFilter(filter)

    //     expect(response).toHaveLength(1);
    // });

});


