import { ErrorExternoAlPasarParams } from "../../../../app/error/ErrorExternoAlPasarParams";
import { IEstadoPago, IMetodoPago, ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../../app/interfaces/ISuscripciones";
import { Suscriptor } from "../../../../app/models/main/suscriptor/Suscriptor";
import { Pago } from "../../../../app/models/main/pago/Pago";
import { Suscripcion } from "../../../../app/models/main/suscripcion/Suscripcion";
import { fechaCreacionDefault, metodoPagoDefault, montoTotalDefault, tipoSuscripcionDefault } from "../../../../app/utils/ConfiguracionesENV";

import { CustomLogger } from "../../../../app/utils/CustomLogger";
import { PagoSuscripcion } from "../../../../app/models/main/pago/PagoSuscripcion";
let _customLogger = new CustomLogger();

/**
 * 1) Monto Total
 * 2) Tipo Suscripcion
 * 3) Fecha Creacion
 * 4) Metodo Pago
 * 5) Suscriptor Pagador
 * 6) ID
 * 7) Estado Pago.
 * 8) Tipo Pago
 */

// ? - - - - - - - - - - - - - - MONTO TOTAL- - - - - - - - - - - - - - 
describe('Escenario 01 - PagoSuscripcion - MONTO TOTAL', () => {

  // Default
  test('1.1 - Crear un PagoSuscripcion con monto total DEFAULT', () => {
        
    let pagoSuscripcion = new PagoSuscripcion();
    
    expect(pagoSuscripcion.montoTotal).toBe(montoTotalDefault)

  });

  // Nuevo monto total
  test('1.2 - Crear un pago con monto total NUEVO', () => {
        
      let pagoSuscripcion = new PagoSuscripcion();

    expect(pagoSuscripcion.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)

  });

  test('1.3 - Crear un pago con monto total NUEVO', () => {
        
    let pagoSuscripcion = new PagoSuscripcion();

        pagoSuscripcion.montoTotal = IValorTipoSuscripcion.PLATINUM

    expect(pagoSuscripcion.montoTotal).toBe(IValorTipoSuscripcion.PLATINUM)

  });
  // Error 
  test('1.4- Crear un pago con monto total ERROR', () => {
    
    try {      
    let pagoSuscripcion = new PagoSuscripcion();

      pagoSuscripcion.montoTotal = IValorTipoSuscripcion.PRUEBA; //? Prueba es negativo.
  
      expect(pagoSuscripcion.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)

    } catch (error) {
      expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
    }

  });

})


// ? - - - - - - - - - - - - - - TIPO SUSCRIPCION - - - - - - - - - - - - - - 

describe('Escenario 02 - PAGO - TIPO SUSCRIPCION', () => {

  // Default
  test('2.1 - Crear un pago con tipo suscripcion DEFAULT', () => {
        
    let pagoSuscripcion = new PagoSuscripcion();

    
    expect(pagoSuscripcion.tipoSuscripcion).toBe(tipoSuscripcionDefault)
  });

  // Nueva suscripcion
  test('2.2 - Crear un pago con tipo suscripcion NUEVA', () => {
        
    let pagoSuscripcion = new PagoSuscripcion();
    pagoSuscripcion.tipoSuscripcion = ITiposuscripcion.GOLD
    
    expect(pagoSuscripcion.tipoSuscripcion).toBe(ITiposuscripcion.GOLD)
  });

  //Todo Error

});


// ? - - - - - - - - - - - - - - FECHA CREACION - - - - - - - - - - - - - - 
describe('Escenario 03 - PAGO - FECHA CREACION', () => {

  // Default
  test('3.1 - Crear un pago con fecha creacion DEFAULT', () => {
        
    let pagoSuscripcion = new PagoSuscripcion();
      
    expect(pagoSuscripcion.fechaCreacion).toBe(fechaCreacionDefault)
  });

  // Nueva
  test('3.2 - Crear un pago con fecha creacion NUEVA', () => {
        
    let pagoSuscripcion = new PagoSuscripcion();
      
    pagoSuscripcion.fechaCreacion = new Date(2020, 10, 10)
    
    expect(pagoSuscripcion.fechaCreacion).not.toBeNull();
  });

  // Error fecha max
  test('3.3 - Crear un pago con fecha creacion ERROR FECHA MAX', () => {
       
    try {
    let pagoSuscripcion = new PagoSuscripcion();

      pagoSuscripcion.fechaCreacion = new Date(2050, 10, 10)
      
      expect(pagoSuscripcion.fechaCreacion).not.toBeNull();

    } catch (error) {
      expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
    }
  });
  
  // Error fecha min
  test('3.4 - Crear un pago con fecha creacion ERROR FECHA MIN', () => {
    try {
    let pagoSuscripcion = new PagoSuscripcion();


      pagoSuscripcion.fechaCreacion = new Date(1950, 10, 10)
    
      expect(pagoSuscripcion.fechaCreacion).not.toBeNull();

    } catch (error) {
      expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
    }
  });

});



// ? - - - - - - - - - - - - - - METODO PAGO - - - - - - - - - - - - - - 
describe('Escenario 04 - PAGO - METODO PAGO', () => {

  // Default
  test('4.1 - Crear un pago metodo pago DEFAULT', () => {

    let pagoSuscripcion = new PagoSuscripcion();
    
    expect(pagoSuscripcion.metodoPago).toBe(metodoPagoDefault);
  });

  // Nuevo
  test('4.2 - Crear un pago  metodo pago NUEVO', () => {

    let pagoSuscripcion = new PagoSuscripcion();

    pagoSuscripcion.metodoPago = IMetodoPago.TARJETA
    
    expect(pagoSuscripcion.metodoPago).toBe(IMetodoPago.TARJETA);
  });

});

// ? - - - - - - - - - - - - - - SUSCRIPTOR PAGADOR - - - - - - - - - - - - - - 
describe('Escenario 05- PAGO - SUSCRIPTOR PAGADOR', () => {

  // Default
  test('5.1 - DEFAULT', () => {
  
  });

  test('5.2 - NUEVO', () => {
    let pagoSuscripcion = new PagoSuscripcion();

    let juanSuscriptor = new Suscriptor();
    juanSuscriptor.nombre = "Juan el pagador"

    pagoSuscripcion.suscriptorPagador = juanSuscriptor;

    _customLogger.logDebug(`Pago, suscriptor Pagador nombre=${juanSuscriptor.nombre}`)

    expect(pagoSuscripcion.suscriptorPagador).toBe(juanSuscriptor);

  });

});
// ? - - - - - - - - - - - - - - ID - - - - - - - - - - - - - - 
describe('Escenario 06 - PAGO - ID', () => {

  // Default
  test('6.1 - DEFAULT', () => {
    let pagoSuscripcion = new PagoSuscripcion();

    console.log("El id pago ", pagoSuscripcion.id)

    expect(pagoSuscripcion.id).toBeDefined();
  });

});

// ? - - - - - - - - - - - - - - ESTADO PAGO - - - - - - - - - - - - - - 
describe('Escenario 06 - PAGO - ESTADO PAGO', () => {

  // Default
  test('6.1 - DEFAULT', () => {
    let pagoSuscripcion = new PagoSuscripcion();

    console.log("El ESTADO PAGO =", pagoSuscripcion.estadoPago)

    expect(pagoSuscripcion.estadoPago).toBe(IEstadoPago.GENERADO)
  });

  test('6.2 - NUEVO', () => {
    let pagoSuscripcion = new PagoSuscripcion();

    pagoSuscripcion.estadoPago = IEstadoPago.COMPLETADO;

    console.log("El ESTADO PAGO deberia ser completado =", pagoSuscripcion.estadoPago)

    expect(pagoSuscripcion.estadoPago).toBe(IEstadoPago.COMPLETADO)
  });

});

// ? - - - - - - - - - - - - - - TIPO PAGO - - - - - - - - - - - - - - 
describe('Escenario 07 - PAGO - TIPO PAGO', () => {

  // Default
  test('7.1 - DEFAULT - Expect TipoSuscripcion', () => {
    let pagoSuscripcion = new PagoSuscripcion();

    expect(pagoSuscripcion.tipoPago).toBe(ITipoPago.PAGOSUSCRIPCION)
  });


});