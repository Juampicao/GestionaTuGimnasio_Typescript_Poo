import { IExpirationUpdateMethodQuantity } from "../../interfaces/interfaces";
import { SubscriptionQuantity } from "../../subscriptions/SubscriptionQuantity";
import { SubscriptorGym } from "../../subscriptors/Subscriptor";

describe('Escenario 01 - SUBSCRIPTOR - PLAN SUBSCRIPTION', () => {

    // Default
    test('1.1 - Crear ', () => {
        let subscriptor1 = new SubscriptorGym()
      
        let subscription1 = new SubscriptionQuantity("juan", IExpirationUpdateMethodQuantity.AMOUNTUSES, 10, 1000);

        subscriptor1.planSubscription = subscription1; 
        subscriptor1.updateExpiredAmountUsesSubscription ; 

        expect(subscriptor1.planSubscription).toBe(subscription1)
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