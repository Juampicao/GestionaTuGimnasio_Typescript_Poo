import { minAmountUsesToExpired, minDaysToExpired, namePlanSubscriptionDefault, newPlanSubscriptionTimeDefault, priceSubscriptionDefault, updateMethodQuantityDefault, updateMethodTimeDefault } from "../../../helpers/ValoresDefault";
import { IUpdateMethodQuantity, IUpdateMethodTime } from "../../../interfaces/interfacesPlanSubscription";
import { CreatorSubscriptionService } from "../../../planSubscriptions/service/CreatorSubscriptionService";



describe('Escenario 01 - CreatorSubscriptionService - Subscription TIME ', () => {

    // Default
    test('1.1  - Default   ', () => {
        let suscripcionCreada = new CreatorSubscriptionService().CreateNewSubscriptionTime(namePlanSubscriptionDefault, updateMethodTimeDefault, minDaysToExpired, priceSubscriptionDefault)

        expect(suscripcionCreada.name).toBe(namePlanSubscriptionDefault)
        expect(suscripcionCreada.updateMethod).toBe(updateMethodTimeDefault)
        expect(suscripcionCreada.daysExpired).toBe(minDaysToExpired)
        expect(suscripcionCreada.price).toBe(priceSubscriptionDefault)

    });

    // Nuevos valores
    test('1.2 - nuevos valores ', () => {
        let suscripcionCreada = new CreatorSubscriptionService().CreateNewSubscriptionTime("plan", IUpdateMethodTime.EXPIRATIONDATE, minDaysToExpired + 1, priceSubscriptionDefault + 10)

         expect(suscripcionCreada.name).toBe("plan")
         expect(suscripcionCreada.updateMethod).toBe(IUpdateMethodTime.EXPIRATIONDATE);
         expect(suscripcionCreada.daysExpired).toBe(minDaysToExpired +1 )
         expect(suscripcionCreada.price).toBe(priceSubscriptionDefault + 10)
         
    });
    
});

describe('Escenario 02 - CreatorSubscriptionService - Subscription Quantity ', () => {

      // Default
    test('2.1  - Default   ', () => {
        let suscripcionCreada = new CreatorSubscriptionService().CreateNewSubscriptionQuantity(namePlanSubscriptionDefault, updateMethodQuantityDefault, minAmountUsesToExpired, priceSubscriptionDefault)

        expect(suscripcionCreada.name).toBe(namePlanSubscriptionDefault)
        expect(suscripcionCreada.updateMethod).toBe(updateMethodQuantityDefault)
        expect(suscripcionCreada.amountUsesToExpired).toBe(minAmountUsesToExpired)
        expect(suscripcionCreada.price).toBe(priceSubscriptionDefault)
    });


    test('2.2  - Nuevos valores ', () => {
        let suscripcionCreada = new CreatorSubscriptionService().CreateNewSubscriptionQuantity("nueva suscripcion", IUpdateMethodQuantity.AMOUNTUSES, minAmountUsesToExpired + 10 , priceSubscriptionDefault + 10)

        expect(suscripcionCreada.name).toBe("nueva suscripcion")
        expect(suscripcionCreada.updateMethod).toBe(IUpdateMethodQuantity.AMOUNTUSES)
        expect(suscripcionCreada.amountUsesToExpired).toBe(minAmountUsesToExpired + 10)
        expect(suscripcionCreada.price).toBe(priceSubscriptionDefault + 10)
    });
 });
