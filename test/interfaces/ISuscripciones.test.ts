import { IValorTipoSuscripcion } from "../../app/interfaces/ISuscripciones";

// ? - - - - - - - - - - - - - - MONTO TOTAL- - - - - - - - - - - - - - 
describe('Escenario 01 - ISUSCRIPCIONES - ENUM', () => {

    // Default
    test('1.1 - Crear un pago con monto total DEFAULT', () => {

        let prueba = IValorTipoSuscripcion.PREMIUM

       
        console.log("prueba", typeof prueba);
        expect(prueba).not.toBeNull();
    });

});
        