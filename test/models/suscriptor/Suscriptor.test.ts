import { ErrorExternoAlPasarParams } from "../../../app/error/ErrorExternoAlPasarParams";
import { IEstadoSuscriptor, ITiposuscripcion } from "../../../app/interfaces/ISuscripciones";
import { Suscriptor } from "../../../app/models/main/suscriptor/Suscriptor";
import { DiasActualizacionFechaVencimientoDefault, estadoSuscriptorDefault, suscripcionNombreDefault } from "../../../app/utils/ConfiguracionesENV";
import { sumarDiasAFechas } from "../../../app/utils/helpers";
/**
 * 1) Nombre y apellido
 * 2) Dni
 * 3) Fecha Nacimiento
 * 4) Estado
 * 5) Tipo Suscripcion
 * 6) Socio
 * 7) Id
 * 8) Fecha Vencimiento Suscripcion
 */

// ? - - - - - - - - - - - - - - NOMBRE Y APELLDIO - - - - - - - - - - - - - - 
describe('Escenario 01 - SUSCRIPTOR - nombre y apellido', () => {

    test('1.1 - DEFAULT', () => {
        
        let suscriptor = new Suscriptor();
        suscriptor.nombre = "Juan"
        suscriptor.apellido = "Perez"

        console.log("suscriptor", suscriptor)
        expect(suscriptor.nombre).toBe("Juan")
        expect(suscriptor.apellido).toBe("Perez")

    });
});

// ? - - - - - - - - - - - - - - DNI - - - - - - - - - - - - - -

describe('Escenario 02 - SUSCRIPTOR - DNI', () => {

    test('2.1 - DEFAULT', () => {
        let suscriptor = new Suscriptor();
        
        suscriptor.dni = 4555555;
        let response = suscriptor.dni;

        expect(response).toEqual(4555555)
    });
});

// ? - - - - - - - - - - - - - - FECHA NACIMIENTO - - - - - - - - - - - - - -

describe('Escenario 03 - SUSCRIPTOR - FECHA NACIMIENTO', () => {

    test('3.1 - NUEVA', () => {
        let suscriptor = new Suscriptor();

        suscriptor.fechaNacimiento = new Date("1999/07/09")

        expect(suscriptor.fechaNacimiento).toBeDefined();

    });

    test('3.3 - ERROR MIN FECHA NACIMIENTO', () => {
         
        try {
            let suscriptor = new Suscriptor();
    
            suscriptor.fechaNacimiento = new Date("1899/07/09")
    
            expect(suscriptor.fechaNacimiento).toBeDefined();

        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
        }

     });
    
    test('3.3 - ERROR MAX FECHA NACIMIENTO', () => {

        try {    
            let suscriptor = new Suscriptor();
        
            suscriptor.fechaNacimiento = new Date("2025/07/09")
            
            expect(suscriptor.fechaNacimiento).toBeDefined();

          } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams)
        }
    });
    
});

// ? - - - - - - - - - - - - - - TIPO SUSCRIPCION - - - - - - - - - - - - - -
describe('Escenario 04 - SUSCRIPTOR - TIPO SUSCRIPCION', () => {
   
    test('4.1 - DEFAULT', () => {
        let suscriptor = new Suscriptor(); 
        
        expect(suscriptor.estado).toBe(estadoSuscriptorDefault)
    });

    test('4.2 - NUEVO', () => {
        let suscriptor = new Suscriptor(); 
        
        suscriptor.estado = IEstadoSuscriptor.ACTIVO

        expect(suscriptor.estado).toBe(IEstadoSuscriptor.ACTIVO)
    });

});
// ? - - - - - - - - - - - - - - TIPO SUSCRIPCION - - - - - - - - - - - - - -
describe('Escenario 04 - SUSCRIPTOR - TIPO SUSCRIPCION', () => {
   
    test('4.1 - DEFAULT', () => {
        let suscriptor = new Suscriptor();

        expect(suscriptor.tipoSuscripcion).toBe(suscripcionNombreDefault)
    });

    test('4.2 - NUEVO', () => {
        let suscriptor = new Suscriptor();

        suscriptor.tipoSuscripcion = ITiposuscripcion.GOLD

        expect(suscriptor.tipoSuscripcion).toBe(ITiposuscripcion.GOLD)
    });
});

// ? - - - - - - - - - - - - - - NUMERO SOCIO - - - - - - - - - - - - - -

describe('Escenario 06 - SUSCRIPTOR - NUMERO SOCIO', () => {

    test('6.1 - DEFAULT', () => {
        
        let suscriptor = new Suscriptor();
        
        expect(suscriptor.numeroSocio).toBeDefined();

    });
});

// ? - - - - - - - - - - - - - - NOMBRE Y APELLDIO - - - - - - - - - - - - - - 

describe('Escenario 07 - SUSCRIPTOR - ID', () => {

    test('5.1 - DEFAULT', () => {
        let suscriptor = new Suscriptor();

        console.log("sus id", suscriptor.id)
        expect(suscriptor.id).toBeDefined();
    });

});

// ? - - - - - - - - - - - - - - FECHA VENCIMIENTO SUSCRIPCION - - - - - - - - - - - - - -

describe('Escenario 08 - SUSCRIPTOR - FECHA VENCIMIENTO SUSCRIPCION', () => {

    test('8.1 - DEFAULT', () => {
        let suscriptor = new Suscriptor();

        console.log("default fecha vencimimiento suscripcion", suscriptor.fechaVencimientoSuscripcion)
        expect(suscriptor.fechaVencimientoSuscripcion.toString()).toBe(new Date().toString())
    });

    test('8.2 - NUEVA', () => {
        let suscriptor = new Suscriptor();
            suscriptor.fechaVencimientoSuscripcion = new Date(2023,2,2)

        console.log("nueva fecha vencimimiento suscripcion", suscriptor.fechaVencimientoSuscripcion)
        expect(suscriptor.fechaVencimientoSuscripcion.toString()).toBe(new Date(2023,2,2).toString())
    });


    test('8.3- Funcion actualizar fecha - DEFAULT.', () => {

        let suscriptor = new Suscriptor();
            let viejaFecha = suscriptor.fechaVencimientoSuscripcion = new Date(2020, 2, 2)
            console.log("vieja fecha vencimimiento suscripcion ", viejaFecha)

            let nuevaFechaDefault = suscriptor.actualizarFechaVencimiento();
            console.log("nueva fecha vencimimiento suscripcion default=", nuevaFechaDefault)

            let fechaObjetivo = sumarDiasAFechas(viejaFecha, DiasActualizacionFechaVencimientoDefault);

        expect(nuevaFechaDefault.toString()).toBe(fechaObjetivo.toString())

    });

    test('8.4- Funcion actualizar fecha - 10 DIAS.', () => {
        let suscriptor = new Suscriptor();
            let viejaFecha = suscriptor.fechaVencimientoSuscripcion = new Date(2020, 2, 2)
           console.log("Prueba actualizar 10 dias, fecha vieja=", viejaFecha)

            let nuevaFecha10Dias = suscriptor.actualizarFechaVencimiento(10);

           console.log("Prueba actualizar 10 dias, fechaNueva=", nuevaFecha10Dias)

        expect(nuevaFecha10Dias.toString()).toBe(new Date(2020, 2, 12).toString())
    });

    test('8.5- Funcion actualizar fecha - 10 DIAS - Cambio de estado a activo.', () => {
        let suscriptor = new Suscriptor();
            let viejaFecha = suscriptor.fechaVencimientoSuscripcion = new Date(2022, 9, 3)
           console.log("Cambio a activo vieja=", viejaFecha)

            let nuevaFecha10Dias = suscriptor.actualizarFechaVencimiento(60);

           console.log("Cambio a activo nueva=", nuevaFecha10Dias)

        expect(suscriptor.estado).toBe(IEstadoSuscriptor.ACTIVO)
    });

    
    test('8.6- Funcion actualizar fecha - 10 DIAS - Mantiene en estado Deudor.', () => {
        let suscriptor = new Suscriptor();
            let viejaFecha = suscriptor.fechaVencimientoSuscripcion = new Date(2020, 2, 2)
           console.log("Mantiene deudor, fechaVieja=", viejaFecha)

            let nuevaFecha = suscriptor.actualizarFechaVencimiento(10);

           console.log("Mantiene deudor, fechaNueva=", nuevaFecha)

        expect(suscriptor.estado).toBe(IEstadoSuscriptor.DEUDOR)
    });


});