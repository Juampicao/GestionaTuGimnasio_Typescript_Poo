import { ErrorExternoAlPasarParams } from "../../../../app/error/ErrorExternoAlPasarParams";
import { IMusculo } from "../../../../app/interfaces/InterfaceEjercicios";
import { IEstadoSuscriptor, IGenero, IMetodoActualizacionFechaVencimiento, ITiposuscripcion } from "../../../../app/interfaces/ISuscripciones";
import { EjercicioGeneral } from "../../../../app/models/main/seccionEjercicios/EjercicioGeneral";
import { EjercicioSuscriptor } from "../../../../app/models/main/seccionEjercicios/EjercicioSuscriptor";
import { Suscriptor } from "../../../../app/models/main/suscriptor/Suscriptor";
import { Usuario } from "../../../../app/models/main/usuario/Usuario";
import { DiasActualizacionFechaVencimientoDefault, estadoSuscriptorDefault, MetodoActualizacionVencimientoDefault, suscripcionNombreDefault } from "../../../../app/utils/ConfiguracionesENV";
import { sumarDiasAFechas } from "../../../../app/utils/helpers";
/**
 * 1) Nombre y apellido
 * 2) Dni
 * 3) Fecha Nacimiento
 * 4) Estado
 * 5) Tipo Suscripcion
 * 6) Socio
 * 7) Id
 * 8) Fecha Vencimiento Suscripcion.
 * 9) Funcion actualizar fecha vencimiento.
 * 10) Creador
 * 11) ContainsData
 * 12) Genero
 * 13) Rutina
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

// ? - - - - - - - - - - - - - - FECHA VENCIMIENTO - - - - - - - - - - - - - -
describe('Escenario 08 - SUSCRIPTOR - FECHA VENCIMIENTO ', () => {

    // Cambiar la fecha 
    test('8.1  - Creacion de un suscriptor, fecha DEFAULT', () => {
        let suscriptor = new Suscriptor();

        console.log("default fecha vencimimiento suscripcion", suscriptor.fechaVencimientoSuscripcion)
        expect(suscriptor.fechaVencimientoSuscripcion.toString()).toBe(new Date().toString())
    });

    test('8.2 - Creacion de un suscriptor, NUEVA', () => {
        let suscriptor = new Suscriptor();
        suscriptor.fechaVencimientoSuscripcion = new Date(2023, 2, 2)

        console.log("nueva fecha vencimimiento suscripcion", suscriptor.fechaVencimientoSuscripcion)
        expect(suscriptor.fechaVencimientoSuscripcion.toString()).toBe(new Date(2023, 2, 2).toString())
    });
});
// ? - - - - - - - - - - - - - - FUNCION ACTUALIZAR FECHA VENCIMIENTO - - - - - - - - - - - - - -
describe('Escenario 09 - SUSCRIPTOR - FUNCION ACTUALIZAR FECHA VENCIMIENTO ', () => {

    // test('9.1- FECHA VENCIMIENTO SUSCRIPCION - DIAS Y METODO DEFAULT.', () => {

    //     let suscriptor = new Suscriptor();
    //         let viejaFecha = suscriptor.fechaVencimientoSuscripcion = new Date(2020, 2, 2)
    //         console.log("vieja fecha vencimimiento suscripcion ", viejaFecha)

    //         let nuevaFechaDefault = suscriptor.actualizarFechaVencimiento();
    //         console.log("nueva fecha vencimimiento suscripcion default=", nuevaFechaDefault)

    //         let fechaObjetivo = sumarDiasAFechas(viejaFecha, DiasActualizacionFechaVencimientoDefault);

    //     expect(nuevaFechaDefault.toString()).toBe(fechaObjetivo.toString())

    // });

    // test('9.2- FECHA VENCIMIENTO SUSCRIPCION - 10 DIAS Y METODO DEFAULT.', () => {
    //     let suscriptor = new Suscriptor();
    //         let viejaFecha = suscriptor.fechaVencimientoSuscripcion = new Date(2020, 2, 2)
    //        console.log("Prueba actualizar 10 dias, fecha vieja=", viejaFecha)

    //         let nuevaFecha10Dias = suscriptor.actualizarFechaVencimiento(10);

    //        console.log("Prueba actualizar 10 dias, fechaNueva=", nuevaFecha10Dias)

    //     expect(nuevaFecha10Dias.toString()).toBe(new Date(2020, 2, 12).toString())
    // });

    // test('9.3- FECHA VENCIMIENTO SUSCRIPCION - 10 DIAS Y METODO DEFAULT - CAMBIO DE ESTADO SUSCRIPTOR.', () => {
    //     let suscriptor = new Suscriptor();
    //         let viejaFecha = suscriptor.fechaVencimientoSuscripcion = new Date(2022, 9, 3)
    //        console.log("Cambio a activo vieja=", viejaFecha)

    //         let nuevaFecha10Dias = suscriptor.actualizarFechaVencimiento(60);

    //        console.log("Cambio a activo nueva=", nuevaFecha10Dias)

    //     expect(suscriptor.estado).toBe(IEstadoSuscriptor.ACTIVO)
    // });

    
    // test('9.4 FECHA VENCIMIENTO SUSCRIPCION - 10 DIAS Y METODO DEFAULT - MANTIENE DE ESTADO SUSCRIPTOR DEUDOR.', () => {
    //     let suscriptor = new Suscriptor();
    //         let viejaFecha = suscriptor.fechaVencimientoSuscripcion = new Date(2020, 2, 2)
    //        console.log("Mantiene deudor, fechaVieja=", viejaFecha)

    //         let nuevaFecha = suscriptor.actualizarFechaVencimiento(10);

    //        console.log("Mantiene deudor, fechaNueva=", nuevaFecha)

    //     expect(suscriptor.estado).toBe(IEstadoSuscriptor.DEUDOR)
    // });

    //Todo no anda
    //  test('9.5 ULTIMO PAGO - DIAS DEFAULT Y METODO ULTIMO PAGO ', () => {
    //      let suscriptor = new Suscriptor();
            
    //         suscriptor.fechaVencimientoSuscripcion = new Date(2020, 5, 2)
    //         console.log("A)metodo ultimoPago, fechaVieja=", suscriptor.fechaVencimientoSuscripcion)
            
    //         const viejaFecha = suscriptor.fechaVencimientoSuscripcion;
    //         console.log("b)metodo ultimoPago, fechaVieja=", viejaFecha)
         
    //         // suscriptor.actualizarFechaVencimiento(DiasActualizacionFechaVencimientoDefault, IMetodoActualizacionFechaVencimiento.ULTIMOPAGO);
    //         // const fechaObjetivo = sumarDiasAFechas(new Date(), DiasActualizacionFechaVencimientoDefault);
         
        
    //     expect(suscriptor.fechaVencimientoSuscripcion).toBe(new Date())
    // });

});


// ? - - - - - - - - - - - - - - CREADOR - - - - - - - - - - - - - -
describe('Escenario 10 - SUSCRIPTOR - CREADOR', () => {

    test('10.1 - DEFAULT', () => {
        let suscriptor = new Suscriptor();
        let creador = suscriptor.creador = new Usuario();
        creador.nombre = "Gimnasio River"

        expect(creador.nombre).toBe("Gimnasio River")
    });

});

// ? - - - - - - - - - - - - - - CONTAINSDATA - - - - - - - - - - - - - -
describe('Escenario 11 - SUSCRIPTOR - CONTAINSDATA', () => {

    test('11.1 - Nombre True', () => {
        let suscriptor = new Suscriptor();
        suscriptor.nombre = "juan"
        let response = suscriptor.containsData("juAN")
        expect(response).toBeTruthy()
    });

    test('11.2 - Nombre False', () => {
        let suscriptor = new Suscriptor();
        suscriptor.nombre = "juan"
        let response = suscriptor.containsData("ROBERT")
        expect(response).toBeFalsy()
    });

    test('11.3 - Apellido True', () => {
            let suscriptor = new Suscriptor();
            suscriptor.nombre = "gomez"
            let response = suscriptor.containsData("goMEZ")
            expect(response).toBeTruthy()
        });
        
    test('11.4 - Apellido false', () => {
            let suscriptor = new Suscriptor();
            suscriptor.nombre = "gomez"
            let response = suscriptor.containsData("pepo")
            expect(response).toBeFalsy()
    });
        
    // Todo DnI
    // test('11.5 - DNI', () => {
    //     let suscriptor = new Suscriptor();
    //     suscriptor.dni = 45555555
    //     let response = suscriptor.containsData(45555555)
    //     expect(response).toBeFalsy()
    // });

    // test('11.6 - DNI False', () => {
    //     let suscriptor = new Suscriptor();
    //     suscriptor.nombre = "gomez"
    //     let response = suscriptor.containsData("pepo")
    //     expect(response).toBeFalsy()
    // });
    // TOdo Socio
});

// ? - - - - - - - - - - - - - - GENERO- - - - - - - - - - - - - -
describe('Escenario 11 - SUSCRIPTOR - GENERO', () => {
   
    test('11.1 - DEFAULT', () => {
        let suscriptor = new Suscriptor();
        
        expect(suscriptor.genero).toBe(IGenero.VOID)
    });

     test('11.2 - DEFAULT', () => {
         let suscriptor = new Suscriptor();
         suscriptor.genero = IGenero.MASCULINO
        
        expect(suscriptor.genero).toBe(IGenero.MASCULINO)
    });

});

// ? - - - - - - - - - - - - - - RUTINA- - - - - - - - - - - - - -
describe('Escenario 13 - SUSCRIPTOR - GENERO', () => {
   
    test('13.1 - DEFAULT', () => {
        let suscriptor = new Suscriptor();
        
        expect(suscriptor.rutina).toStrictEqual([])
    });


    //Todo no anda
    // test('13.2 - Agregar un ejericio suscriptor', () => {
    //     let suscriptor = new Suscriptor();
    //     let ejericioGeneral = new EjercicioGeneral();
    //         ejericioGeneral.musculos = [IMusculo.ABDOMINALES];  

    //     let ejercicioSuscriptor = new EjercicioSuscriptor();
    //         ejercicioSuscriptor.ejercicio = ejericioGeneral;
    //     ejercicioSuscriptor.repeticiones = 10;
    //     ejercicioSuscriptor.series = 4;

    //     suscriptor.addEjerciciToRutina(ejercicioSuscriptor);
        
    //     console.log("rutina del suscriptor", suscriptor.rutina)
    //     expect(suscriptor.rutina).toStrictEqual([])
    // });

    test('13.3 - Eliminar un ejericio suscriptor', () => {
        let suscriptor = new Suscriptor();
        
        expect(suscriptor.rutina).toStrictEqual([])
    });
});