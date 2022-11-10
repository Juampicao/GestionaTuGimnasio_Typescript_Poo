import { amountToExpiredDefault, amountToExpiredNull, daysToExpiredDefault, daysToExpiredNull, newPlanSubscriptionQuantityDefault, newPlanSubscriptionTimeDefault } from "../../helpers/ValoresDefault";

import { Subscription } from "../../subscriptors/Subscription";



describe('Escenario 01 - SUBSCRIPTION ', () => {

    /**
     * Si el planSubscription es de type = time.
     * DayToExpired = New Date()
     * AmountToExpired = null (-1)
     */
    test('1.1- plan subscription time.', () => {
        
        let planSubscription = newPlanSubscriptionTimeDefault; 
        let subscription = new Subscription(planSubscription)
        let daysToExpired = subscription.daysToExpired.toString()
        let amountToExpired = subscription.amountToExpired; 

        console.log(`PlanSubscriptionTime= DaysToExpired: ${daysToExpired}, AmountToExpired ${amountToExpired}`)
        
        expect(daysToExpired).toBe(daysToExpiredDefault.toString()); 
        expect(amountToExpired).toBe(amountToExpiredNull);


    });

    /**
     * Si el planSubscription es de type = time.
     * DayToExpired = null (new Date(0))
     * AmountToExpired = null (0)
     */ 
    test('1.2- plan subscription quantity. ', () => {
        
        let planSubscription = newPlanSubscriptionQuantityDefault; 
        let subscription = new Subscription(planSubscription)
        let daysToExpired = subscription.daysToExpired
        let amountToExpired = subscription.amountToExpired; 

        console.log(`PlanSubscriptionQuantity= DaysToExpired: ${daysToExpired}, AmountToExpired ${amountToExpired}`)
        
        expect(daysToExpired).toBe(daysToExpiredNull); 
        expect(amountToExpired).toBe(amountToExpiredDefault);
    });
});