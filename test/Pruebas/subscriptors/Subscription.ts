import { amountToExpiredDefault, amountToExpiredNull, daysToExpiredDefault, daysToExpiredNull } from "../helpers/ValoresDefault";
import { ITypeSubscription, IUpdateMethodQuantity, IUpdateMethodTime } from "../interfaces/interfacesPlanSubscription";
import { PlanSubscription } from "../plansubscriptions/PlanSubscription";

export class Subscription {

    private _planSubscription: PlanSubscription;
    private _updateMethod: IUpdateMethodTime | IUpdateMethodQuantity; 
    private _daysToExpired: Date;
    private _amountToExpired: number;
    

    constructor(planSubscription: PlanSubscription) {
        this._planSubscription = planSubscription;
        this._daysToExpired = daysToExpiredNull;
        this._amountToExpired = amountToExpiredNull; 
        this.updateExpired(); 
    }


    get planSubscription(): PlanSubscription{
        return this._planSubscription; 
    }

    get updateMethod(): IUpdateMethodTime | IUpdateMethodQuantity{
        return this._updateMethod;
    }

    /**
     * @return cantidad de dias que le quedan al suscriptor para vencer su plan. 
     */
    get daysToExpired(): Date{
        return this._daysToExpired;
    }

    /**
     * @return usos que le quedan para vencer.
     */
    get amountToExpired(): number{
        return this._amountToExpired;
    }
    
    /**
     * Actualiza el estilo de vencimiento que posee una subscription segun el planSubscription.type
     * Si es de tipo tiempo, contiene una daysToExpired = default, y un amountUsesToExpired = null.
     * Si es de tipo cantidad, contiene un amountToExpired = default y un daysToExpired = null.
     */
    private updateExpired() {
        this._updateMethod = this._planSubscription.updateMethod;
        
        if (this._planSubscription.typeSubscription === ITypeSubscription.TIME) {
            this._daysToExpired = daysToExpiredDefault;
            this._amountToExpired = amountToExpiredNull;
        } else if (this._planSubscription.typeSubscription === ITypeSubscription.QUANTITY) {
            this._amountToExpired = amountToExpiredDefault
            this._daysToExpired = daysToExpiredNull; 
        }

    }

}