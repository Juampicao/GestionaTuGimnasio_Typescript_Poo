

import { ISuscritorManagerService } from "../../../app/interfaces/services/ISuscriptorManagerService";
import { SuscriptorManagerServiceMock } from "./SuscriptorManagerServiceMock";
import { SuscriptorManagerService } from "../../../app/services/SuscriptorManagerService";
import { CustomLogger } from "../../../app/utils/CustomLogger";
import { SuscriptorFilter } from "../../../app/models/filter/SuscriptorFilter";
import { Suscriptor } from "../../../app/models/main/suscriptor/Suscriptor";
import { NoHayResultadosError } from "../../../app/error/NoHayResultadosError";


/**
 * 1) Tipo Pago
 * 2) Tipo Suscripcion
 * 3) Fecha Creacion
 * 4) Creador
 * 5) Metodo Pago
 */

// Inyeccion de dependencias.
function getService(instance: string = "original"): ISuscritorManagerService {
    if (instance === "original") {
        return new SuscriptorManagerService();
    } else {
        return new SuscriptorManagerServiceMock();
    }
}

let customlogger = new CustomLogger();

//? - - - - - - - - -  - - - DATA  - - - - - - - - -  - - - //
describe('Escenario 1 - SUSCRIPCION MANAGER SERVICE MOCK - DATA', () => {
   
   
    let servicioContentManager = getService("test"); 
   
    //Todo 
    //? Si el filter esta vacio, deberia volver a todos.
    // test('Caso 1.1 - Todas son suscripciones', () => {
    
    //     let filter = new SuscriptorFilter();
        
    //     let response: Array<Suscriptor> = servicioContentManager.getSuscriptoresByFilter(filter)

    //     expect(response).toHaveLength(3);

    // });

    test('Caso 1.2 - Nombre', () => {
    
        let filter = new SuscriptorFilter();
        filter.data = "Juan";

        let response: Array<Suscriptor> = servicioContentManager.getSuscriptoresByFilter(filter)

        expect(response).toHaveLength(1);

    });

    test('Caso 1.3 - Ninguna', () => {
    
        try {      
            let filter = new SuscriptorFilter();
            filter.data = "Ninguna"
        
            let response: Array<Suscriptor> = servicioContentManager.getSuscriptoresByFilter(filter)
            expect(response).toHaveLength(0);
        } catch (error) {
            expect(error).toBeInstanceOf(NoHayResultadosError)
        }

    });

     test('Caso 1.4 - Apellido', () => {
    
        let filter = new SuscriptorFilter();
        filter.data = "gomez";

        let response: Array<Suscriptor> = servicioContentManager.getSuscriptoresByFilter(filter)

        expect(response).toHaveLength(1);

    });

});


//? - - - - - - - - -  - - -  PAGINATION BY DATA  - - - - - - - - -  - - - //
describe('Escenario 2 - SUSCRIPCION MANAGER SERVICE MOCK - PAGINATION BY DATA', () => {
   
    
    // let servicioContentManager = new SuscriptorManagerServiceMock();
   
    //Todo no anda 
    // //? Si el filter esta vacio, deberia volver a todos.
    // test('Caso 2.1 - Todas son suscripciones', () => {
    
    //     let filter = new SuscriptorFilter();
       
    //     let response: Array<Suscriptor> = servicioContentManager.getSuscriptoresByFilterPaged(filter, 1, 1);

    //     expect(response).toHaveLength(1);

    // });

});