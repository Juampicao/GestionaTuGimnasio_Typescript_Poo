import { ErrorExternoAlPasarParams } from "../../../app/error/ErrorExternoAlPasarParams";
import { IMetodoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../app/interfaces/ISuscripciones";
import { PagoFilter } from "../../../app/models/main/pagoFilter/PagoFilter";
import { FechaCreacionSinceDefault, FechaCreacionUntilDefault } from "../../../app/utils/ConfiguracionesENV";
import { CustomLogger } from "../../../app/utils/CustomLogger";


/**
 * 1) Monto Total
 * 2) Tipo Suscripcion
 * 3) Fecha Creacion
 * 4) Metodo Pago
 */


let customLogger = new CustomLogger();


// ? - - - - - - - - - - - - - - MONTO TOTAL- - - - - - - - - - - - - - 
describe('Escenario 01 - PAGO FILTER - MONTO TOTAL', () => { 
   
    test('1.1 - Crear un pago filter con MONTO TOTAL VOID', () => {
    
        let filter = new PagoFilter();

        expect(filter.montoTotal).toBe(IValorTipoSuscripcion.VOID)
    });

    test('1.2 - Crear un pago filter con MONTO TOTAL PREMIUM', () => {
    
        let filter = new PagoFilter();

        filter.montoTotal = IValorTipoSuscripcion.PREMIUM

        expect(filter.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)
    });
});

// ? - - - - - - - - - - - - - - TIPO SUSCRIPCION - - - - - - - - - - - - - -

describe('Escenario 02 - PAGO FILTER - TIPO SUSCRIPCION', () => { 

    test('2.1 - Crear un pago filter con TIPO SUSCRIPCION VOID', () => {
    
        let filter = new PagoFilter();

        expect(filter.tipoSuscripcion).toBe(ITiposuscripcion.VOID)
    });

    test('2.1 - Crear un pago filter con TIPO SUSCRIPCION GOLD', () => {
    
        let filter = new PagoFilter();

        filter.tipoSuscripcion = ITiposuscripcion.GOLD

        expect(filter.tipoSuscripcion).toBe(ITiposuscripcion.GOLD)
    });

});
// ? - - - - - - - - - - - - - - FECHA CREACION SINCE & UNTIL- - - - - - - - - - - - - - 

describe('Escenario 03 - PAGO FILTER - FECHA CREACION', () => { 
    
    test('3.1 - Crear un pago filter con fecha creacion since & until  DEFAULT', () => {
        
        let contenido1 = new PagoFilter();
       
        let fechaCreacionSince = contenido1.fechaCreacionSince.toLocaleDateString();
        let fechaCreacionUntil = contenido1.fechaCreacionUntil.toLocaleDateString();

        let fechaCreacionSinceDefault = FechaCreacionSinceDefault.toLocaleDateString();
        let fechaCreacionUntilDefault = FechaCreacionUntilDefault.toLocaleDateString();

        customLogger.logDebug(`ContentItemFilterTest, la fechaCreacionSince default=${fechaCreacionSince} & fechaCreacionUntil default =${fechaCreacionUntil} `)

        expect(fechaCreacionSince).toBe(fechaCreacionSinceDefault);
        expect(fechaCreacionUntil).toBe(fechaCreacionUntilDefault);
    });

    test('3.2 - Crear un pago filter con fecha creacion since & until NUEVO', () => {
      
        let contenido1 = new PagoFilter();
        contenido1.fechaCreacionSince = new Date(2022, 1, 10)
        contenido1.fechaCreacionUntil= new Date(2022,10,10)
        
        let fechaCreacionSince = contenido1.fechaCreacionSince
        let fechaCreacionUntil = contenido1.fechaCreacionUntil
        
        customLogger.logDebug(`ContentItemFilterTest, la fechaCreacionSince nueva=${fechaCreacionSince} & fechaCreacionUntil nueva=${fechaCreacionUntil}`)

        expect(fechaCreacionSince).not.toBeNull();
        expect(fechaCreacionUntil).not.toBeNull();  
    
    });

    test('3.3 - Crear un pago filter con fecha creacion since max ERROR', () => {

        try {
            let contenido1 = new PagoFilter();
            contenido1.fechaCreacionSince = new Date(2050, 10, 10)
            contenido1.fechaCreacionUntil = new Date(2050,10,10)
            
            let response: Date = contenido1.fechaCreacionSince; 
            let response2: Date = contenido1.fechaCreacionUntil 
            
            expect(response).not.toBeNull();
            expect(response2).not.toBeNull();

        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
        }
    
    });

    test('3.4 - Crear un pago filter con fecha creacion since min ERROR', () => {

        try {

            let contenido1 = new PagoFilter();
            contenido1.fechaCreacionSince = new Date(1950, 10, 10)
            contenido1.fechaCreacionUntil = new Date(1950,10,10)
            
            let response: Date = contenido1.fechaCreacionSince; 
            let response2: Date = contenido1.fechaCreacionUntil 
            
            expect(response).toBeNull();
            expect(response2).toBeNull();

        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
        }
    
    });
});

// ? - - - - - - - - - - - - - - METODO PAGO - - - - - - - - - - - - - - 

describe('Escenario 04 - PAGO FILTER - METODO PAGO', () => { 


    test('4.1 - Crear un pago filter con  METODO PAGO VOID', () => {
    
        let filter = new PagoFilter();

        expect(filter.metodoPago).toBe(IMetodoPago.VOID)
    });

    test('4.2 - Crear un pago filter con  METODO PAGO EFECTIVO', () => {
    
        let filter = new PagoFilter();

        filter.metodoPago = IMetodoPago.EFECTIVO

        expect(filter.metodoPago).toBe(IMetodoPago.EFECTIVO)
    });

});