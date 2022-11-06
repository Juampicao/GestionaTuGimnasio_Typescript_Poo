import { IExpirationUpdateMethodQuantity, IExpirationUpdateMethodTime } from "../interfaces/interfaces";

export const minNumberPositive: number = 0;
export const maxNumberPositive: number = 100000;

//? - - - - - - - -  Subscription Price - - - - - - - // 
export const minNumberSubscriptionPrice: number = minNumberPositive;
export const maxNumberSubscriptionPrice: number = 100000;

export const priceSubscriptionDefault: number = 10000;

//? - - - - - - - -  Subscription Valid Days Expired - - - - - - - // 
export const minDaysToExpired: number = 1;
export const maxDaysToExpired: number = 365;

//? - - - - - - - -  Subscription Valid Amount of Uses To  Expired - - - - - - - // 
export const minAmountUsesToExpired: number = 1;
export const maxAmountUsesToExpired: number = 1000;


//? - - - - - - - -  Updated Method Subscription - - - - - - - // 
export const updateMethodTimeDefault: IExpirationUpdateMethodTime = IExpirationUpdateMethodTime.EXPIRATIONDATE;
export const updateMethodQuantityDefault: IExpirationUpdateMethodQuantity = IExpirationUpdateMethodQuantity.AMOUNTUSES;


// Tip: Para probar en test los numeros maximos y minimo, hacer  minNumberSubscriptionPrice - 1 o maxNumberSubscriptionPrice + 1.
