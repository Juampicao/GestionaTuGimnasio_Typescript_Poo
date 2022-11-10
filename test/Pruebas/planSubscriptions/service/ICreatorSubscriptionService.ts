
import { PlanSubscriptionTime } from "../PlanSubscriptionTime";
import { PlanSubscriptionQuantity } from "../PlanSubscriptionQuantity";
import { IUpdateMethodTime, IUpdateMethodQuantity } from "../../interfaces/interfacesPlanSubscription";

export interface ICreatorSubscriptionService {
    
    /**
     * Crear nueva suscripción con metodo actualización de tiempo.
     * @param nameSubscription : nombre de la suscripción.
     * @param updateMethod : metodo de actualización de la fecha de vencimiento en los suscriptores al pagar la suscripcion.
     * @param daysExpired: dias para que el vencimiento de los suscriptores que posean esta suscripcion.
     * @param price: precio de la suscripcion.
     */
    CreateNewSubscriptionTime(nameSubscription: string, updateMethod: IUpdateMethodTime, daysExpired: number, price : number): PlanSubscriptionTime

    /**
     * Crear nueva suscripción con metodo actualización por cantidad de usos.
     * @param nameSubscription : nombre de la suscripción.
     * @param updateMethod : metodo de actualización del vencimiento  en cantidad de usos en los suscriptores al pagar la suscripcion.
     * @param amountUsesToExpired: cantidad de veces de uso para que expire la suscripción.
     * @param price: precio de la suscripcion.
     */
    CreateNewSubscriptionQuantity(nameSubscription: string, updateMethod: IUpdateMethodQuantity,amountUsesToExpired: number, price : number): PlanSubscriptionQuantity;
    
}