import { IUpdateMethodQuantity, IUpdateMethodTime } from "../interfaces/interfacesPlanSubscription";
import { PlanSubscriptionQuantity } from "../planSubscriptions/PlanSubscriptionQuantity";
import { PlanSubscriptionTime } from "../planSubscriptions/PlanSubscriptionTime";

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
/**
 * Default:  Expiration Date
 */
export const updateMethodTimeDefault: IUpdateMethodTime = IUpdateMethodTime.EXPIRATIONDATE;
export const updateMethodQuantityDefault: IUpdateMethodQuantity = IUpdateMethodQuantity.AMOUNTUSES;

//? - - - - - - - -  Plan Subscription Name Default  - - - - - - - // 
export const namePlanSubscriptionDefault: string = "premium";


//? - - - - - - - -   Plan Subscription Time Default  - - - - - - - // 
/**
 * Nuevo Plan de Suscripcion de tipo TIME.
 * @param Name Premium.
 * @param UpdateMethod Default updateMethodTimeDefault.
 * @param Days minDaysToExpried.
 * @param Price 10000.
 */
export const newPlanSubscriptionTimeDefault: PlanSubscriptionTime = new PlanSubscriptionTime("premium", updateMethodTimeDefault, minDaysToExpired + 30, 10000);

/**
 * Nuevo Plan de Suscripcion de tipo QUANTITY.
 * @param Name standard.
 * @param UpdateMethod Default updateMethodQuantityDefault.
 * @param Days minDaysToExpried.
 * @param Price 10000.
 */
export const newPlanSubscriptionQuantityDefault: PlanSubscriptionQuantity = new PlanSubscriptionQuantity("standard", updateMethodQuantityDefault, minAmountUsesToExpired + 30, 10000);


//? - - - - - - - -   Expiration Style de Subscription  - - - - - - - // 
export const amountToExpiredNull: number = -1; 
export const amountToExpiredDefault: number = 0;

export const daysToExpiredNull: Date = new Date(0); 
export const daysToExpiredDefault: Date = new Date(); 

// Tip: Para probar en test los numeros maximos y minimo, hacer  minNumberSubscriptionPrice - 1 o maxNumberSubscriptionPrice + 1.
// Tip: Crear plan de suscripciones default asi cada vez que modifico algo, solo lo cambio aca.

