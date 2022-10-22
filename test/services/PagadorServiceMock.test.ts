import { IEstadoPago, IMetodoPago, ITipoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../../app/interfaces/ISuscripciones";
import { Pago } from "../../app/models/main/pago/Pago";
import { PagadorService } from "../../app/services/PagadorService";
import { CustomLogger } from "../../app/utils/CustomLogger";
import { PagadorServiceMock } from "./PagadorServiceMock";
import { CrearSuscriptores } from "../utils/CrearSuscriptores";
import { CrearUsuarios } from "../utils/CrearUsuarios";
import { Suscriptor } from "../../app/models/main/suscriptor/Suscriptor";
import { sumarDiasAFechas } from "../../app/utils/helpers";

//Todo => : PagadorService
// Inyeccion de dependencias.
function getService(instance: string = "original"): any {
    if (instance === "original") {
        return new PagadorService();
    } else {
        return new PagadorServiceMock();
    }
}

let customlogger = new CustomLogger();


//? Crear un pago de suscripcion, con un suscriptor y un usuario real, creados previamente de forma de prueba.
describe('Escenario 01 - PAGADOR SERVICE MOCK - CREAR PAGO SUSCRIPCION ', () => {

    let servicioPagador = getService("test"); 
    let suscriptor1 = new CrearSuscriptores().obtener1Suscriptor();
    let usuario1 = new CrearUsuarios().obtener1Usuario();

    test('1.1 - CREAR UN NUEVO PAGO COMPLETO ', () => {

        let pago = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pago.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)
        expect(pago.tipoSuscripcion).toBe(ITiposuscripcion.PREMIUM)
        expect(pago.suscriptorPagador).toBe(suscriptor1);
        expect(pago.creador.nombre).toBe(usuario1.nombre);
        expect(pago.estadoPago).toBe(IEstadoPago.COMPLETADO)
        expect(pago.fechaCreacion.toString()).toBe(new Date(2022, 5, 5).toString());
        expect(pago.metodoPago).toBe(IMetodoPago.EFECTIVO)
        expect(suscriptor1.fechaVencimientoSuscripcion.toLocaleDateString()).toBe(new Date(2022, 10, 20).toLocaleDateString())
        expect(pago.tipoPago).toBe(ITipoPago.PAGOSUSCRIPCION);
        
    });


//? - - - - - - - - -  MONTO TOTAL Y TIPO SUSCRIPCION  - - - - - - -  - - - - //

    test('1.2 - MONTO TOTAL Y TIPO SUSCRIPCION', () => {

        let pago = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pago.montoTotal).toBe(IValorTipoSuscripcion.PREMIUM)
        expect(pago.tipoSuscripcion).toBe(ITiposuscripcion.PREMIUM)
    });

//? - - - - - - - - -  SUSCRIPTOR PAGADOR  - - - - - - -  - - - - //

     test('1.3 - SUSCRIPTOR PAGADOR ', () => {

        let pago = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pago.suscriptorPagador).toBe(suscriptor1);
         expect(pago.suscriptorPagador.nombre).toBe(suscriptor1.nombre);
         
     });
    
    
//? - - - - - - - - -  CREADOR - - - - - - -  - - - - - - -  //
    test('1.4 - CREADOR ', () => {

        let pago = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pago.creador.nombre).toBe(usuario1.nombre);
        expect(pago.creador.nombre).not.toBe("Otro nombre");
    });


//? - - - - - - - - -  ESTADO PAGO  - - - - - - -  - - - - - - -  //

    test('1.5 - ESTADO PAGO ', () => {

        let pago = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pago.estadoPago).toBe(IEstadoPago.COMPLETADO);
        expect(pago.estadoPago).not.toBe(IEstadoPago.GENERADO);

    });

//? - - - - - - - - -  FECHA CREACION - - - - - - -  - - - - - - -  //

    test('1.6 - FECHA CREACION ', () => {

        let pago = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pago.fechaCreacion.toString()).toBe(new Date(2022, 5, 5).toString());
        expect(pago.fechaCreacion.toString()).not.toBe(new Date(2000, 2, 5).toString());

    });


//? - - - - - - - - -  METODO PAGO - - - - - - -  - - - - - - -  //
    test('1.7 - METODO PAGO ', () => {

        let pago = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pago.metodoPago).toBe(IMetodoPago.EFECTIVO);
        expect(pago.estadoPago).not.toBe(IMetodoPago.TARJETA);
    });

//? - - - - - - - - -  NUEVA FECHA VENCIMIENTO - - - - - - -  - - - - - - -  //

     test('1.8 - NUEVA FECHA VENCIMIENTO - Exito', () => {

        let servicioPagador = getService("test"); 
        let suscriptor1 = new CrearSuscriptores().obtener1Suscriptor();
        
        // Fecha inicial del suscriptor.
        let viejaFecha = suscriptor1.fechaVencimientoSuscripcion;
        
        // Inicio un nuevo servicio.
        servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        let nuevaFechaObjetivo = sumarDiasAFechas(viejaFecha, 10)

        // Fecha nueva del suscriptor, despues del servicio.
        let responseNuevaFecha = suscriptor1.fechaVencimientoSuscripcion;

        console.log(`PagadorServiceMockTest, fechaVencimientoSuscripcion, Nueva =${responseNuevaFecha.toLocaleDateString()}`)

        expect(responseNuevaFecha.toLocaleDateString()).toBe(nuevaFechaObjetivo.toLocaleDateString())
    });

     test('1.9 - NUEVA FECHA VENCIMIENTO - Error', () => {

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
    
//? - - - - - - - - - - TIPO PAGO - - - - - - -  - - - - - - -  //
     test('1.9 - TIPO PAGO - SUSCRIPCION', () => {

        let pago = servicioPagador.CrearNuevoPagoSuscripcion(suscriptor1);
        
        expect(pago.tipoPago).toBe(ITipoPago.PAGOSUSCRIPCION);
     });

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