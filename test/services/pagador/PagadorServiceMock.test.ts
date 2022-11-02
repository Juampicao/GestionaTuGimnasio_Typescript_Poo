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


// Tip 1: Nombre CrearPago, no nuevo pago. Verbos.
// Tip 2: CrearNuevoPagoSuscripcion.
// Tip 3: CrearPagoOTROTIPODEPAGO.
// Tip 4: Hacer el userStory. Ser muy especifico. ¿Que es un suscriptor? un cliente que paga mensualemente. Hay varios tipos de suscripcion. ayuda a pensar la solucion final.
// tip 5: Si quiere pagar mitad efectivo y mitad tarjeta? ¿Como se hace?
// tip 6: El cambio de estado, la fecha nueva de vencimiento, cambia desde aca? o llamo a otra funcion?
// tip 7: Datapatch, es mala palabra. Te olvidas de la logica del negocio y vas a la base del negocio. El estado del suscriptor, no deberia poder tocarse. Es una funcion.
// tipo 8: Ciclo de vida del objeto pago. Hacer el hueso hoy. Pago tiene 2 pasos. 1)Generar 2)Completar. Hoy, son el mismo paso, es decir, cuando genero, se completa. Pero dejarlo bien estructurado, para que en el futuro estos pasos, puedan ser independientes.
// tipo 9: La funcion que cambia de deudor activo, es llamada al realizar el pago. No esta en el pago. El valor 30 dias, debe aun estar en otro sitio (configuracionENV default hoy). Es decir , 3 lugares diferentes.