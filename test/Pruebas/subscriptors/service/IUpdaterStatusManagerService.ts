import { ISubscriptorStatus } from "../../interfaces/InterfacesSubscriptor";
import { Subscriptor } from "../Subscriptor";

export interface IUpdaterStatusManagerService {

    /**
     ** Actualiza el status de un subscriptor by time
     * @param subscriptor subscriptor a actualizar.
     */
    updateSubscriptorStatusByTime(subscriptor: Subscriptor): ISubscriptorStatus;

    /**
    ** Actualiza el status de un subscriptor by quantity
    * @param subscriptor subscriptor a actualizar.
    */
    updateSubscriptorStatusByQuantity(subscriptor: Subscriptor): ISubscriptorStatus;


}