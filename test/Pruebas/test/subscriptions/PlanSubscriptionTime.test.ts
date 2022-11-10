

import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { minDaysToExpired, namePlanSubscriptionDefault, priceSubscriptionDefault } from "../../helpers/ValoresDefault";
import { IUpdateMethodTime } from "../../interfaces/interfacesPlanSubscription";
import { PlanSubscriptionTime } from "../../planSubscriptions/PlanSubscriptionTime";


//? - - - - - - - - -  DaysToExpired - - - - -  -- - - -  //

describe('Escenario 02 - PLANSUBSCRIPTION - Days To expired', () => {

    //? Constructor
    test('2.1- DAYS TO EXPIRED ', () => {
        let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, IUpdateMethodTime.EXPIRATIONDATE, 10, priceSubscriptionDefault);
        let daysToExpired = planSubscription1.daysExpired
        
        expect(daysToExpired).toBe(10)
    });

    //? Cambiar con set
    test('2.2- DAYS TO EXPIRED ', () => {
        let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, IUpdateMethodTime.EXPIRATIONDATE, 10, priceSubscriptionDefault);
        planSubscription1.daysExpired = 7;
        let daysToExpired = planSubscription1.daysExpired
        
        expect(daysToExpired).toBe(7)
    });

    //! Error desde Contructor.
    test('2.3- DAYS TO EXPIRED ', () => {
        try {
            let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, IUpdateMethodTime.EXPIRATIONDATE, minDaysToExpired - 10, priceSubscriptionDefault);
            let daysToExpired = planSubscription1.daysExpired
            
            expect(daysToExpired).toBe(minDaysToExpired - 10)
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });

    //! Error desde set.
    test('2.4- DAYS TO EXPIRED ', () => {
        try {
            let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, IUpdateMethodTime.EXPIRATIONDATE, 50, priceSubscriptionDefault);
            planSubscription1.daysExpired = minDaysToExpired - 10; 
            let daysToExpired = planSubscription1.daysExpired
            
            expect(daysToExpired).toBe(minDaysToExpired - 10)
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });

});