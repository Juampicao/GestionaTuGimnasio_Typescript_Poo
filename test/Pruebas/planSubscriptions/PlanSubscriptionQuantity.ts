import { isValidNumberReturnBoolean, isValidNumberReturnNumber } from "../helpers/helpersFunctions";
import { maxAmountUsesToExpired, minAmountUsesToExpired } from "../helpers/ValoresDefault";
import { ITypeSubscription, IUpdateMethodQuantity } from "../interfaces/interfacesPlanSubscription";
import { PlanSubscription } from "./PlanSubscription";

export class PlanSubscriptionQuantity extends PlanSubscription {

    private _amountUsesToExpired: number; 
    
   
    /**
     * Crear un plan de suscripcion de tipo cantidad. ITypeSubscription = Quantity.
     * @param name  nombre del plan de suscripcion.
     * @param updateMethodByQuantity metodo de actualización del vencimiento : IUpdateMethodQuantity.
     * @param amountUsesToExpired cantidad de veces de uso para el vencimiento del plan de suscripcion.
     * @param price precio del plan de suscripcion.
     */
    constructor(name: string , updateMethodByQuantity : IUpdateMethodQuantity, amountUsesToExpired: number, price: number) {
        super(name, ITypeSubscription.QUANTITY, updateMethodByQuantity, price)
        
        this._amountUsesToExpired = isValidNumberReturnNumber(amountUsesToExpired, minAmountUsesToExpired , maxAmountUsesToExpired)
    }
    
    
    /**
     ** AmountUsesToExpired
     * @param amountUsesToExpired: Cantidad de veces de uso para que expire la suscripción.
     */
    set amountUsesToExpired(amountUsesToExpired: number) {
        if (isValidNumberReturnBoolean(amountUsesToExpired, minAmountUsesToExpired, maxAmountUsesToExpired)) {
            this._amountUsesToExpired = amountUsesToExpired; 
        }
    }
    
    /**
     * @return Cantidad de usos que quedan para vencerse.
     */
    get amountUsesToExpired(): number{
        return this._amountUsesToExpired; 
    }
}



// private _updateMethodByQuantity: IExpirationUpdateMethodQuantity;  

    // /**
    //  ** UpdateMethodByQuantity
    //  * Obtener el tipo de metodo de actualización para la fecha vencimiento de los suscripciones, de la suscripción.
    //  */
    // get updateMethodByQuantity(): IExpirationUpdateMethodQuantity{
    //     return this._updateMethodByQuantity; 
    // }
