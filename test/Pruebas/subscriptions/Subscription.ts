import { User } from "../client/User/User";
import { IExpirationUpdateMethodQuantity, IExpirationUpdateMethodTime, ISuscriptionUpdateMethod, ITypeSubscription } from "../interfaces/interfaces";


import { isValidNumberReturnBoolean, isValidNumberReturnNumber } from "../helpers/helpersFunctions"; 
import { maxNumberPositive, minNumberSubscriptionPrice } from "../helpers/ValoresDefault";


export abstract class Subscription {
    
    protected _name: string;
    protected _typeSubscription: ITypeSubscription;
    protected _price: number;
    protected _creator: User;
    protected _id: number

    constructor(name: string, typeSubscription: ITypeSubscription, price: number) {
        this._typeSubscription = typeSubscription;
        this._name = name;
        this._price = isValidNumberReturnNumber(price, minNumberSubscriptionPrice, maxNumberPositive)
    }

    //* Name
    set name(name: string) {
        this._name = name;
    }

    get name(): string{
        return this._name; 
    }
    
    //* typeSubscription
    get typeSubscription(): ITypeSubscription{
        return this._typeSubscription;
    }


    /**
     * Verify if price is a valid number between minNumberSubscriptionPrice & maxNumberPositive.
     * @param price: price subscription
     */
    set price(price: number) {
        if (isValidNumberReturnBoolean(price, minNumberSubscriptionPrice, maxNumberPositive)) {
            this._price = price; 
        }
    }

    get price(): number{
        return this._price;
    }

    //* Creator 
    get creator(): User{
        return this._creator; 
    }

    //* Id
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
