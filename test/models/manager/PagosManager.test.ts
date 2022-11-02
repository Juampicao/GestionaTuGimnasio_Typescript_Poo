import { PagosManager } from "../../../app/models/manager/PagosManager";
import { CustomLogger } from "../../../app/utils/CustomLogger";
import { PagadorServiceMock } from "../../services/pagador/PagadorServiceMock";

let _customLogger = new CustomLogger();
let servicioContentManager = new PagadorServiceMock();

/**
 * 1) By TipoPago
 * 2) By TipoSuscripcion
 * 3) By FechaCreacion
 * 4) By Creador
 * 5) By MetodoPago
 */

// ? - - - - - - - - - - - - - - BY TIPOPAGO - - - - - - - - - - - - - - 
describe('Escenario 01 - PAGOS MANAGER  - TIPO PAGO', () => {

  // Default
    test('Caso 1.1 - Default', () => {

    })


})


// ? - - - - - - - - - - - - - - BY TIPO SUCRIPCION - - - - - - - - - - - - - - 

describe('Escenario 02 - PAGO - TIPO SUSCRIPCION', () => {

  // Default
  test('2.1 - Crear un pago con tipo suscripcion DEFAULT', () => {
        
 
  });

});


// ? - - - - - - - - - - - - - - BY FECHA CREACION - - - - - - - - - - - - - - 
describe('Escenario 03 - PAGO - FECHA CREACION', () => {

  // Default
  test('3.1 - Crear un pago con fecha creacion DEFAULT', () => {
        
  });
});



// ? - - - - - - - - - - - - - - BY CREADOR - - - - - - - - - - - - - - 
describe('Escenario 04 - PAGO - METODO PAGO', () => {

  // Default
  test('4.1 - Crear un pago metodo pago DEFAULT', () => {

    
  });

 

});

// ? - - - - - - - - - - - - - - BY METODO PAGO - - - - - - - - - - - - - - 
describe('Escenario 05- PAGO - SUSCRIPTOR PAGADOR', () => {

  // Default
  test('5.1 - DEFAULT', () => {
  
  });

 

});
