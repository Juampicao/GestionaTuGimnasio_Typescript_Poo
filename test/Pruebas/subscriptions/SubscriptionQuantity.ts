import { isValidNumberReturnBoolean, isValidNumberReturnNumber } from "../helpers/helpersFunctions";
import { maxAmountUsesToExpired, minAmountUsesToExpired } from "../helpers/ValoresDefault";
import { IExpirationUpdateMethodQuantity, ISuscriptionUpdateMethod } from "../interfaces/interfaces";
import { Subscription } from "./Subscription";

export class SubscriptionQuantity extends Subscription {

    private _updateMethodByQuantity: IExpirationUpdateMethodQuantity;  
    private _amountUsesToExpired: number; 
    

    constructor(name: string , updateMethodByQuantity : IExpirationUpdateMethodQuantity, amountUsesToExpired: number, price: number) {
        super(name, ISuscriptionUpdateMethod.TIME, price)

        this._updateMethodByQuantity = updateMethodByQuantity; 
        this._amountUsesToExpired = isValidNumberReturnNumber(amountUsesToExpired, minAmountUsesToExpired , maxAmountUsesToExpired)
    }

    /**
     ** UpdateMethodByQuantity
     * Obtener el tipo de metodo de actualización para la fecha vencimiento de los suscripciones, de la suscripción.
     */
    get updateMethodByQuantity(): IExpirationUpdateMethodQuantity{
        return this._updateMethodByQuantity; 
    }
    
    /**
     ** AmountUsesToExpired
     * @param amountUsesToExpired: cantidad de veces de uso para que expire la suscripción.
     */
    set amountUsesToExpired(amountUsesToExpired: number) {
        if (isValidNumberReturnBoolean(amountUsesToExpired, minAmountUsesToExpired, maxAmountUsesToExpired)) {
            this._amountUsesToExpired = amountUsesToExpired; 
        }
    }

    get amountUsesToExpired(): number{
        return this._amountUsesToExpired; 
    }
}
