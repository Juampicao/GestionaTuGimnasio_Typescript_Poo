import { IValorTipoSuscripcion } from "../../../../app/interfaces/ISuscripciones";
import { CrearSuscriptoresPrueba } from "../../../utils/CrearSuscriptoresPrueba";
import { PaymentSubscription } from "../../payments/PaymentSubscription";

describe('Escenario 01 - PAYMENT SUBSCRIPTION - Pruebas', () => {

    // Default
    test('1.1 - Crear un paymentSubscription ', () => {
        
        let suscriptor1 = new CrearSuscriptoresPrueba().get1SuscriptorObject();
        let pago = new PaymentSubscription(suscriptor1, IValorTipoSuscripcion.GOLD);
            pago.montoTotal = 10; 


    });
});