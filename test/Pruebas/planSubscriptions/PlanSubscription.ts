import { User } from "../client/User/User";
import { ITypeSubscription, IUpdateMethodQuantity, IUpdateMethodTime } from "../interfaces/interfacesPlanSubscription";


import { isValidNumberReturnBoolean, isValidNumberReturnNumber } from "../helpers/helpersFunctions"; 
import { maxNumberPositive, minNumberSubscriptionPrice } from "../helpers/ValoresDefault";


export abstract class PlanSubscription {
    
    protected _name: string;
    protected _typeSubscription: ITypeSubscription;
    protected _updateMethod: IUpdateMethodTime | IUpdateMethodQuantity; 
    protected _price: number;
    protected _creator: User;
    protected _id: number

    constructor(name: string, typeSubscription: ITypeSubscription, updateMethod: IUpdateMethodTime | IUpdateMethodQuantity,  price: number) {
        this._typeSubscription = typeSubscription;
        this._updateMethod = updateMethod; 
        this._name = name;
        this._price = isValidNumberReturnNumber(price, minNumberSubscriptionPrice, maxNumberPositive)
    }

    /**
    ** Name
    * @param name nombre del plan de suscripcion.
    */
    set name(name: string) {
        this._name = name;
    }

    /**
     * @return nombre del plan de suscripcion.
     */
    get name(): string{
        return this._name; 
    }
    
    /**
     ** typeSubscription
     * @returns tipo de suscripción del plan : ITypeSubscripcion
     */
    get typeSubscription(): ITypeSubscription{
        return this._typeSubscription;
    }

    /**
     ** updateMethod
     * @return metodo de actualización del plan de suscripción. : IUpdateMethodTime o IUpdateMethodCuantity. 
     */
    get updateMethod(): IUpdateMethodTime | IUpdateMethodQuantity{
        return this._updateMethod;
    }

    /**
     * Verify if price is a valid number between minNumberSubscriptionPrice & maxNumberPositive.
     * @param price price plan subscription
     */
    set price(price: number) {
        if (isValidNumberReturnBoolean(price, minNumberSubscriptionPrice, maxNumberPositive)) {
            this._price = price; 
        }
    }

    /** 
     * @return precio del plan de suscripción.
     */
    get price(): number{
        return this._price;
    }

    /**
     ** Creator
     * @return creador del plan de suscripción : User.
     */
    get creator(): User{
        return this._creator; 
    }

    /**
     * 
     * @return el id del plan de suscripción. : number.
     */
    get id(): number{
        return this._id; 
    }

}


// //?  - - - - - - - - - - - - SUBSCRIPTION TIME - - - - - - - - - - - - //

// export class SubscriptionTime extends Subscription {

//     private _updateMethodByTime: IExpirationUpdateMethodTime;  

//     constructor(name: string , updateMethodBytime : IExpirationUpdateMethodTime) {
//         super(name, ISuscriptionUpdateMethod.TIME)

//         this._updateMethodByTime = updateMethodBytime; 
//     }

//     get updateMethodByTime(): IExpirationUpdateMethodTime{
//         return this._updateMethodByTime; 
//     }
    
// }


// //?  - - - - - - - - - - - - SUBSCRIPTION QUANTITY - - - - - - - - - - - - //

// export class SubscriptionQuantity extends Subscription {

//     private _updateMethodByQuantity: IExpirationUpdateMethodQuantity;  

//     constructor(name: string , updateMethodByQuantity : IExpirationUpdateMethodQuantity) {
//         super(name, ISuscriptionUpdateMethod.TIME)

//         this._updateMethodByQuantity = updateMethodByQuantity; 
//     }

//     get updateMethodByQuantity(): IExpirationUpdateMethodQuantity{
//         return this._updateMethodByQuantity; 
//     }
    
// }

//?  - - - - - - - - - - - - UPDATE SERVICE - - - - - - - - - - - - //
