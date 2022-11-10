import { ITypeSubscription } from "../../interfaces/interfacesPlanSubscription";
import { Subscriptor } from "../Subscriptor";
import { UpdateManagerService } from "./UpdateManagerService";
import { UpdaterStatusManagerService } from "./UpdaterStatusManagerService";

/**
 * Detectar cual es el método de actualización de vencimiento que posee un subscriptor.
 */
export class UpdateMethodService {

    /**
     * 
     * @param subscriptor : subscriptor a distinguir si update method segun el planSubscription.
     */
    FilterSubscriptorByUpdateMethod(subscriptor: Subscriptor) {

        const typeSubscription = subscriptor.planSubscription.typeSubscription;
        const planSubscription = subscriptor.planSubscription;

        if (typeSubscription === ITypeSubscription.QUANTITY ) {
        
            // Actualizar por cantidad
            let amountUses = subscriptor.planSubscription.
            let update =  new UpdateManagerService().UpdateSubscriptorExpiredByQuantity(subscriptor, );
        } else if (typeSubscription === ITypeSubscription.TIME) {

            // Actualizar por tiempo
        }
    }

}