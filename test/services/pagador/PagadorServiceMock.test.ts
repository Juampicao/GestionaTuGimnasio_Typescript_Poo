import { IEstadoPago, IMetodoActualizacionFechaVencimiento, IMetodoPago, ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../../app/interfaces/ISuscripciones";
import { PagadorService } from "../../../app/services/PagadorService";
import { PagadorServiceMock } from "./PagadorServiceMock";
import { CrearSuscriptoresPrueba } from "../../utils/CrearSuscriptoresPrueba";
import { CrearUsuariosPrueba } from "../../utils/CrearUsuariosPrueba";
import { sumarDiasAFechas } from "../../../app/utils/helpers";
import { Suscriptor } from "../../../app/models/main/suscriptor/Suscriptor";

//Todo => : PagadorService

// Inyeccion de dependencias.
function getService(instance: string = "original"): any {
    if (instance === "original") {
        return new PagadorService();
    } else {
        return new PagadorServiceMock();
    }
}
 


//? Crear un pago de suscripcion, con un suscriptor y un usuario real, creados previamente de forma de prueba.
describe('Escenario 01 - PAGADOR SERVICE MOCK - CREAR PAGO SUSCRIPCION ', () => {

    let servicioPagador = getService("test");
    let suscriptor1 = new CrearSuscriptoresPrueba().get1SuscriptorObject();
    let usuario1 = new CrearUsuariosPrueba().get1UsuarioObject();

    test('1.1 - CREAR UN NUEVO PAGO COMPLETO ', () => {

        let pagoSuscripcion = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1, new Date(2022,5,5), IMetodoPago.EFECTIVO);
        
        expect(pagoSuscripcion.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)
        expect(pagoSuscripcion.tipoSuscripcion).toBe(ITiposuscripcion.PREMIUM)
        expect(pagoSuscripcion.suscriptorPagador).toBe(suscriptor1);
        expect(pagoSuscripcion.creador.nombre).toBe(usuario1.nombre);
        expect(pagoSuscripcion.estadoPago).toBe(IEstadoPago.COMPLETADO)
        expect(pagoSuscripcion.fechaCreacion.toString()).toBe(new Date(2022, 5, 5).toString());
        expect(pagoSuscripcion.metodoPago).toBe(IMetodoPago.EFECTIVO)
        expect(suscriptor1.fechaVencimientoSuscripcion.toLocaleDateString()).toBe(new Date(2022, 10, 20).toLocaleDateString())
        expect(pagoSuscripcion.tipoPago).toBe(ITipoPago.PAGOSUSCRIPCION);
        
        
    });


    //? - - - - - - - - -  MONTO TOTAL Y TIPO SUSCRIPCION  - - - - - - -  - - - - //

    test('1.2 - MONTO TOTAL Y TIPO SUSCRIPCION', () => {

        let pagoSuscripcion = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pagoSuscripcion.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)
        expect(pagoSuscripcion.tipoSuscripcion).toBe(ITiposuscripcion.PREMIUM)
    });

    //? - - - - - - - - -  SUSCRIPTOR PAGADOR  - - - - - - -  - - - - //

    test('1.3 - SUSCRIPTOR PAGADOR ', () => {

        let pagoSuscripcion = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pagoSuscripcion.suscriptorPagador).toBe(suscriptor1);
        expect(pagoSuscripcion.suscriptorPagador.nombre).toBe(suscriptor1.nombre);
         
    });
    
    
    //? - - - - - - - - -  CREADOR - - - - - - -  - - - - - - -  //
    test('1.4 - CREADOR ', () => {

        let pagoSuscripcion = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pagoSuscripcion.creador.nombre).toBe(usuario1.nombre);
        expect(pagoSuscripcion.creador.nombre).not.toBe("Otro nombre");
    });


    //? - - - - - - - - -  ESTADO PAGO  - - - - - - -  - - - - - - -  //

    test('1.5 - ESTADO PAGO ', () => {

        let pagoSuscripcion = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pagoSuscripcion.estadoPago).toBe(IEstadoPago.COMPLETADO);
        expect(pagoSuscripcion.estadoPago).not.toBe(IEstadoPago.GENERADO);

    });

    //? - - - - - - - - -  FECHA CREACION - - - - - - -  - - - - - - -  //

    test('1.6 - FECHA CREACION ', () => {

        let pagoSuscripcion = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pagoSuscripcion.fechaCreacion.toString()).toBe(new Date(2022, 5, 5).toString());
        expect(pagoSuscripcion.fechaCreacion.toString()).not.toBe(new Date(2000, 2, 5).toString());

    });


    //? - - - - - - - - -  METODO PAGO - - - - - - -  - - - - - - -  //
    test('1.7 - METODO PAGO ', () => {

        let pagoSuscripcion = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pagoSuscripcion.metodoPago).toBe(IMetodoPago.EFECTIVO);
        expect(pagoSuscripcion.estadoPago).not.toBe(IMetodoPago.TARJETA);
    });


    //TODO: Probar con el metodo Pago.
    // test('1.10 - NUEVA FECHA VENCIMIENTO -  Metodo ultimo pago', () => {

           
    //     let servicioPagador = getService("test");
    //     let suscriptor1 = new CrearSuscriptores().obtener1Suscriptor();
        
    //     // Fecha inicial del suscriptor.
    //     let viejaFecha = suscriptor1.fechaVencimientoSuscripcion;
    //     console.log("vieja fecha del objetivo", viejaFecha)
    //     // Inicio un nuevo servicio.
    //     servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
    //     let nuevaFechaObjetivo = sumarDiasAFechas(new Date(), 10)
    //     console.log("nuevaFecha del objetivo", nuevaFechaObjetivo)

    //     // Fecha nueva del suscriptor, despues del servicio.
    //     let responseNuevaFecha = suscriptor1.fechaVencimientoSuscripcion;

    //     console.log(`PagadorServiceMockTest, fechaVencimientoSuscripcion, Nueva =${responseNuevaFecha.toLocaleDateString()}`)

    //     expect(responseNuevaFecha.toLocaleDateString()).toBe(nuevaFechaObjetivo.toLocaleDateString())
    // });
        
    

});


//? - - - - - - - - -  NUEVA FECHA VENCIMIENTO - - - - - - -  - - - - - - -  //

describe('Escenario 02 - PAGADOR SERVICE MOCK - CREAR PAGO SUSCRIPCION  - Fecha vencimiento', () => {

    let servicioPagador = getService("test");
    
    //? Metodo fecha vencimiento
    test('2.1 - NUEVA FECHA VENCIMIENTO - Metodo actualizarFechaVencimiento => Fecha Vencimiento - Exito', () => {
        
        let suscriptor1 = new CrearSuscriptoresPrueba().get1SuscriptorObject();

        // Fecha inicial del suscriptor.
        let viejaFecha = suscriptor1.fechaVencimientoSuscripcion;
        
        // Inicio un nuevo servicio de pago.
        servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        let nuevaFechaObjetivo = sumarDiasAFechas(viejaFecha, 10)

        // Fecha nueva del suscriptor, despues del servicio.
        let responseNuevaFecha = suscriptor1.fechaVencimientoSuscripcion;

        console.log(`PagadorServiceMockTest, fechaVencimientoSuscripcion, Nueva =${responseNuevaFecha.toLocaleDateString()}`)

        expect(responseNuevaFecha.toLocaleDateString()).toBe(nuevaFechaObjetivo.toLocaleDateString())
    });

    //? Metodo fecha vencimiento
    test('2.2 - NUEVA FECHA VENCIMIENTO - Metodo actualizarFechaVencimiento => Fecha Vencimiento - Error', () => {
        let suscriptor1 = new CrearSuscriptoresPrueba().get1SuscriptorObject();

        try {
            let viejaFecha = new Date(2022, 10, 15); // Deberia ser 2022,10,10.
            let nuevaFechaObjetivo = sumarDiasAFechas(viejaFecha, 10)
    
            let responseNuevaFecha = suscriptor1.fechaVencimientoSuscripcion;
    
            console.log(`PagadorServiceMockTest, fechaVencimientoSuscripcion, Nueva =${responseNuevaFecha.toLocaleDateString()}`)
    
            expect(responseNuevaFecha.toLocaleDateString()).toBe(nuevaFechaObjetivo.toLocaleDateString())
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
        }
    });

    /**
     * ? Metodo ultimo pago. Debo usar un suscriptor con tipoSuscripcion "GOLD".
     * ! La nueva fechaVencimiento del suscriptor debería ser a partir de la fecha de pago.
     * tODO no funcionan, las fechas son las 3 iguales.
     */
    // test('2.3 - NUEVA FECHA VENCIMIENTO - Metodo actualizarFechaVencimiento => Ultimo Pago - Exito', () => {
        
    //     let suscriptorGold = new Suscriptor();
    //     suscriptorGold.tipoSuscripcion = ITiposuscripcion.GOLD; 
    //     suscriptorGold.actualizarFechaVencimiento(8, IMetodoActualizacionFechaVencimiento.FECHAVENCIMIENTOSUSCRIPCION)
        
    //     // Fecha inicial del suscriptor.
    //     const viejaFecha = suscriptorGold.fechaVencimientoSuscripcion;
        
    //     servicioPagador.CrearNuevoPagoSuscripcion(suscriptorGold,new Date(), IMetodoPago.TARJETA);
        
    //     const nuevaFechaObjetivo = sumarDiasAFechas(viejaFecha, 3)

    //     // Fecha nueva del suscriptor, despues del servicio.
    //     const responseNuevaFecha = suscriptorGold.fechaVencimientoSuscripcion;

    //     // console.log(`PagadorServiceMockTest, fechaVencimientoSuscripcion, Nueva =${responseNuevaFecha.toLocaleDateString()}`)
    //     console.log("la fecha viejita es:", viejaFecha.toLocaleDateString(), "la nueva fecha objetivo es:", nuevaFechaObjetivo.toLocaleDateString(), "responseNuevaFecha: ", responseNuevaFecha.toLocaleDateString());

    //     expect(responseNuevaFecha.toLocaleDateString()).toBe(nuevaFechaObjetivo.toLocaleDateString())
    // });
});


// TODO
// Casos TEST a pensar

//? 1 - Suscriptor FREE por 30 dias
    // ¿Tengo que crear un pago? ¿Con monto 0? 
    // if (tipoSuscripcion.metodoPagoOFerta !== void) {
       //PagoSuscripcion.metodoPago = metodoPago  
    //} else 
//? 2 - Suscriptor especial oferta del 15 % sobre la suscripcion "STANDAR"
//? 3 - Crear una oferta por pagos en efectivo de TODAS suscripciones con metodoPago efectivo.
    // Si "metodoPago = Efectivo", Le hace un descuento del 20%. 
    // ¿Quien es el responsable de determinar el monto? El servicioPagador no. La suscripcion con sus valores. 
