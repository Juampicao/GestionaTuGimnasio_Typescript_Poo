import { isValidNumberReturnBoolean, isValidNumberReturnNumber } from "../helpers/helpersFunctions";
import { maxDaysToExpired, minDaysToExpired } from "../helpers/ValoresDefault";
import { IExpirationUpdateMethodTime, ISuscriptionUpdateMethod, ITypeSubscription } from "../interfaces/interfaces";
import { Subscription } from "./Subscription";

export class SubscriptionTime extends Subscription {

    private _updateMethodByTime: IExpirationUpdateMethodTime; 
    private _daysToExpired: number; 

    constructor(name: string , updateMethodBytime : IExpirationUpdateMethodTime, daysToExpired: number, price: number) {
        super(name, ITypeSubscription.TIME, price)

        this._updateMethodByTime = updateMethodBytime; 
        this._daysToExpired = isValidNumberReturnNumber(daysToExpired, minDaysToExpired, maxDaysToExpired)
    }

    get updateMethodByTime(): IExpirationUpdateMethodTime{
        return this._updateMethodByTime; 
    }
    
    //* DaysExpire
    set daysExpired(daysExpired: number) {
        
        if (isValidNumberReturnBoolean(daysExpired, minDaysToExpired, maxDaysToExpired)) {
            this._daysToExpired = daysExpired;
        }
    }

    get daysExpried(): number {
        return this._daysToExpired;
    }
}