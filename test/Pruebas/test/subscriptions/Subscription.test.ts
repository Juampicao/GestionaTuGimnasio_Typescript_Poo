import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { maxNumberSubscriptionPrice, minAmountUsesToExpired, minDaysToExpired, priceSubscriptionDefault, updateMethodQuantityDefault, updateMethodTimeDefault } from "../../helpers/ValoresDefault";
import { IExpirationUpdateMethodQuantity, IExpirationUpdateMethodTime } from "../../interfaces/interfaces";
import { SubscriptionQuantity } from "../../subscriptions/SubscriptionQuantity";
import { SubscriptionTime } from "../../subscriptions/SubscriptionTime";

describe('Escenario 01 - SUBSCRIPTION - Pruebas', () => {

    // Crear una subscription time
    test('1.1 - Crear una SUBSCRIPTION TIME', () => {
     
        let subscription1 = new SubscriptionTime("standard", IExpirationUpdateMethodTime.EXPIRATIONDATE, minAmountUsesToExpired,  priceSubscriptionDefault); 
        subscription1.name = "premium";
        subscription1.updateMethodByTime;

        const expirationMethod = subscription1.updateMethodByTime;
        const subscriptionName = subscription1.name

        expect(expirationMethod).toBe(IExpirationUpdateMethodTime.EXPIRATIONDATE)
        expect(subscriptionName).toBe("premium")
    });

    // Crear una subscription quantity
    test('1.2 - Crear una SUBSCRIPTION QUANTITY', () => {
     
        let subscription1 = new SubscriptionQuantity("tenUses", IExpirationUpdateMethodQuantity.AMOUNTUSES, minAmountUsesToExpired ,priceSubscriptionDefault); 
        subscription1.name = "tenUses";
        subscription1.updateMethodByQuantity;

        const expirationMethod = subscription1.updateMethodByQuantity;
        const subscriptionName = subscription1.name

        expect(expirationMethod).toBe(IExpirationUpdateMethodQuantity.AMOUNTUSES)
        expect(subscriptionName).toBe("tenUses")
    });


});

//? - - - - - - - - -  PRICE - - - - -  -- - - -  // 

describe('Escenario 03 - SUBSCRIPTION - PRICE', () => { 
    test('3.1- SUCCESS ', () => {
        let subscription1 = new SubscriptionTime("standard", updateMethodTimeDefault, minDaysToExpired + 1 ,priceSubscriptionDefault); 
        subscription1.price = 100; 

        expect(subscription1.price).toBe(100)
    });

    test('3.2- ERROR MIN NUMBER ', () => {
        try {
            let subscription1 = new SubscriptionQuantity("standard", updateMethodQuantityDefault, minAmountUsesToExpired + 1, priceSubscriptionDefault); 
            subscription1.price = -10; 
    
            expect(subscription1.price).toBe(-10)
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });

    test('3.3- ERROR  MAX NUMBER ', () => {
        try {
            let subscription1 = new SubscriptionTime("standard", updateMethodTimeDefault, minDaysToExpired + 1,  priceSubscriptionDefault); 
            subscription1.price = maxNumberSubscriptionPrice + 1; 
    
            expect(subscription1.price).toBe(maxNumberSubscriptionPrice + 1)
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });
});
