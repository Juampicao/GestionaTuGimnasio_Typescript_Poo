import { isValidNumberReturnBoolean, isValidNumberReturnNumber } from "../helpers/helpersFunctions";
import { maxDaysToExpired, minDaysToExpired } from "../helpers/ValoresDefault";
import { ITypeSubscription, IUpdateMethodTime } from "../interfaces/interfacesPlanSubscription";
import { PlanSubscription } from "./PlanSubscription";

export class PlanSubscriptionTime extends PlanSubscription {

    private _daysToExpired: number; 
    
    /**
     * Crear un plan de suscripcion de tipo tiempo. ITypeSubscription = Time.
     * @param name  nombre del plan de suscripcion.
     * @param updateMethodBytime metodo de actualización del vencimiento por tiempo: IUpdateMethodTime.
     * @param daysToExpired dias para el vencimiento del plan de suscripcion.
     * @param price precio del plan de suscripcion.
     */
    constructor(name: string , updateMethodBytime : IUpdateMethodTime, daysToExpired: number, price: number) {
        super(name, ITypeSubscription.TIME, updateMethodBytime, price)
        
        this._daysToExpired = isValidNumberReturnNumber(daysToExpired, minDaysToExpired, maxDaysToExpired)
    }
    
    
    /**
    ** DaysExpired     
    * @param daysExpired: Cantidad de dias para que expire la subscriptionTime.
    */
    set daysExpired(daysExpired: number) {
        
        if (isValidNumberReturnBoolean(daysExpired, minDaysToExpired, maxDaysToExpired)) {
            this._daysToExpired = daysExpired;
        }
    }
    
    /**
     * @return Cantidad de dias para que expire la subscriptionTime.
     */
    get daysExpired(): number {
        return this._daysToExpired;
    }
}


// private _updateMethodByTime: IUpdateMethodTime;

// this._updateMethodByTime = updateMethodBytime; 

// get updateMethodByTime(): IExpirationUpdateMethodTime{
//     return this._updateMethodByTime; 
// }