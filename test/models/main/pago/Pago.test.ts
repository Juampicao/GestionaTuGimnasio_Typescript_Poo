import { ErrorExternoAlPasarParams } from "../../../../app/error/ErrorExternoAlPasarParams";
import { IEstadoPago, IMetodoPago, ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../../app/interfaces/ISuscripciones";
import { Suscriptor } from "../../../../app/models/main/suscriptor/Suscriptor";
import { Pago } from "../../../../app/models/main/pago/Pago";
import { Suscripcion } from "../../../../app/models/main/suscripcion/Suscripcion";
import { fechaCreacionDefault, metodoPagoDefault, montoTotalDefault, tipoSuscripcionDefault } from "../../../../app/utils/ConfiguracionesENV";

import { CustomLogger } from "../../../../app/utils/CustomLogger";
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
describe('Escenario 01 - PAGO - MONTO TOTAL', () => {

  // Default
  test('1.1 - Crear un pago con monto total DEFAULT', () => {
        
    let pago = new Pago();
    
    expect(pago.montoTotal).toBe(montoTotalDefault)

  });

  // Nuevo monto total
  test('1.2 - Crear un pago con monto total NUEVO', () => {
        
    let pago = new Pago();
    
    // let suscripcion = new Suscripcion()
    // suscripcion.valor = IValorTipoSuscripcion.PREMIUM;
    
    // pago.montoTotal = suscripcion.valor;

    expect(pago.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)

  });

  test('1.3 - Crear un pago con monto total NUEVO', () => {
        
    let pago = new Pago();
    let suscripcion = new Suscripcion()
    suscripcion.valor = IValorTipoSuscripcion.PREMIUM;
    
    pago.montoTotal = suscripcion.valor

    expect(pago.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)

  });
  // Error 
  test('1.3 - Crear un pago con monto total ERROR', () => {
    try {      
      let pago = new Pago();
      
      pago.montoTotal = IValorTipoSuscripcion.PRUEBA; //? Prueba es negativo.
  
      expect(pago.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)

    } catch (error) {
      expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
    }

  });

})


// ? - - - - - - - - - - - - - - TIPO SUSCRIPCION - - - - - - - - - - - - - - 

describe('Escenario 02 - PAGO - TIPO SUSCRIPCION', () => {

  // Default
  test('2.1 - Crear un pago con tipo suscripcion DEFAULT', () => {
        
    let pago = new Pago();
    
    expect(pago.tipoSuscripcion).toBe(tipoSuscripcionDefault)
  });

  // Nueva suscripcion
  test('2.2 - Crear un pago con tipo suscripcion NUEVA', () => {
        
    let pago = new Pago();
    pago.tipoSuscripcion = ITiposuscripcion.GOLD
    
    expect(pago.tipoSuscripcion).toBe(ITiposuscripcion.GOLD)
  });

  //Todo Error

});


// ? - - - - - - - - - - - - - - FECHA CREACION - - - - - - - - - - - - - - 
describe('Escenario 03 - PAGO - FECHA CREACION', () => {

  // Default
  test('3.1 - Crear un pago con fecha creacion DEFAULT', () => {
        
    let pago = new Pago();
    
    expect(pago.fechaCreacion).toBe(fechaCreacionDefault)
  });

  // Nueva
  test('3.2 - Crear un pago con fecha creacion NUEVA', () => {
        
    let pago = new Pago();

    pago.fechaCreacion = new Date(2020, 10, 10)
    
    expect(pago.fechaCreacion).not.toBeNull();
  });

  // Error fecha max
  test('3.3 - Crear un pago con fecha creacion ERROR FECHA MAX', () => {
       
    try {
      let pago = new Pago();

      pago.fechaCreacion = new Date(2050, 10, 10)
      
      expect(pago.fechaCreacion).not.toBeNull();

    } catch (error) {
      expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
    }
  });
  
  // Error fecha min
  test('3.4 - Crear un pago con fecha creacion ERROR FECHA MIN', () => {
    try {
      let pago = new Pago();

      pago.fechaCreacion = new Date(1950, 10, 10)
    
      expect(pago.fechaCreacion).not.toBeNull();

    } catch (error) {
      expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
    }
  });

});



// ? - - - - - - - - - - - - - - METODO PAGO - - - - - - - - - - - - - - 
describe('Escenario 04 - PAGO - METODO PAGO', () => {

  // Default
  test('4.1 - Crear un pago metodo pago DEFAULT', () => {

    let pago = new Pago();
    
    expect(pago.metodoPago).toBe(metodoPagoDefault);
  });

  // Nuevo
  test('4.2 - Crear un pago  metodo pago NUEVO', () => {

    let pago = new Pago();

    pago.metodoPago = IMetodoPago.TARJETA
    
    expect(pago.metodoPago).toBe(IMetodoPago.TARJETA);
  });

});

// ? - - - - - - - - - - - - - - SUSCRIPTOR PAGADOR - - - - - - - - - - - - - - 
describe('Escenario 05- PAGO - SUSCRIPTOR PAGADOR', () => {

  // Default
  test('5.1 - DEFAULT', () => {
  
  });

  test('5.2 - NUEVO', () => {
  let pago = new Pago();

    let juanSuscriptor = new Suscriptor();
    juanSuscriptor.nombre = "Juan el pagador"

    pago.suscriptorPagador = juanSuscriptor;

    _customLogger.logDebug(`Pago, suscriptor Pagador nombre=${juanSuscriptor.nombre}`)

    expect(pago.suscriptorPagador).toBe(juanSuscriptor);

  });

});
// ? - - - - - - - - - - - - - - ID - - - - - - - - - - - - - - 
describe('Escenario 06 - PAGO - ID', () => {

  // Default
  test('6.1 - DEFAULT', () => {
    let pago = new Pago();

    console.log("El id pago ", pago.id)

    expect(pago.id).toBeDefined();
  });

});

// ? - - - - - - - - - - - - - - ESTADO PAGO - - - - - - - - - - - - - - 
describe('Escenario 06 - PAGO - ESTADO PAGO', () => {

  // Default
  test('6.1 - DEFAULT', () => {
    let pago = new Pago();

    console.log("El ESTADO PAGO =", pago.estadoPago)

    expect(pago.estadoPago).toBe(IEstadoPago.GENERADO)
  });

  test('6.2 - NUEVO', () => {
    let pago = new Pago();
    pago.estadoPago = IEstadoPago.COMPLETADO;

    console.log("El ESTADO PAGO deberia ser completado =", pago.estadoPago)

    expect(pago.estadoPago).toBe(IEstadoPago.COMPLETADO)
  });

});

// ? - - - - - - - - - - - - - - TIPO PAGO - - - - - - - - - - - - - - 
describe('Escenario 07 - PAGO - TIPO PAGO', () => {

  // Default
  test('7.1 - DEFAULT', () => {
    let pago = new Pago();

    expect(pago.tipoPago).toBe(ITipoPago.PAGOSUSCRIPCION)
  });

    // Nuevo
  test('7.2 - Nuevo', () => {
    let pago = new Pago();
        pago.tipoPago = ITipoPago.PAGOMATRICULA

    expect(pago.tipoPago).toBe(ITipoPago.PAGOMATRICULA)
  });

});