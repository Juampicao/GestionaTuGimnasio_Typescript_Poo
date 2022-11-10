import { amountToExpiredDefault, amountToExpiredNull, daysToExpiredDefault, daysToExpiredNull, newPlanSubscriptionQuantityDefault, newPlanSubscriptionTimeDefault } from "../../helpers/ValoresDefault";
import { PlanSubscription } from "../../planSubscriptions/PlanSubscription";
import { Subscriptor } from "../../subscriptors/Subscriptor";

export class SubscriptorGym extends Subscriptor{

    constructor(planSubscription : PlanSubscription) {
        super(planSubscription)
    }
}

describe('Escenario 01 - SUBSCRIPTOR - Crear default', () => {
   
    // Default
    test('1.1 - Crear SUBSCRIPTOR PLAN QUANTITY', () => {

        let planSubscription = newPlanSubscriptionQuantityDefault

        let subscriptor1 = new SubscriptorGym(planSubscription)
    
        subscriptor1.planSubscription = planSubscription; 
        let amountToExpired = subscriptor1.subscription.amountToExpired; 
        let daysToExpired = subscriptor1.subscription.daysToExpired;
        console.log(`AMOUNT ${amountToExpired} , DAYS ${daysToExpired}`)
        

        expect(amountToExpired).toBe(amountToExpiredDefault);
        expect(daysToExpired).toBe(daysToExpiredNull)
    });

    test('1.2 - Crear SUBSCRIPTOR PLAN TIME  ', () => {

        let planSubscription = newPlanSubscriptionTimeDefault

        let subscriptor1 = new SubscriptorGym(planSubscription)
    
        subscriptor1.planSubscription = planSubscription; 
        let amountToExpired = subscriptor1.subscription.amountToExpired; 
        let daysToExpired = subscriptor1.subscription.daysToExpired;
        console.log(`AMOUNT ${amountToExpired} , DAYS ${daysToExpired}`)
        

        expect(amountToExpired).toBe(amountToExpiredNull);
        expect(daysToExpired).toBe(daysToExpiredDefault)
    });
});






// describe('Escenario 01 - SUBSCRIPTOR - PERSONAL INFORMATION', () => {

//     // Default
//     test('1.1 - Crear ', () => {
//         // subscriptor1.personalInformation.name = "Juan";
//         // subscriptor1.personalInformation.age = 10; 

//         // let name = subscriptor1.personalInformation.name; 
//         // let age = subscriptor1.personalInformation.age;

      

//         // expect(name).toBe("Juan");
//         // expect(age).toBe(10);
//     });
// });