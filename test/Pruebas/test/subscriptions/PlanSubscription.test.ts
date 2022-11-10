import { ErrorExternoAlPasarParams } from "../../../error/ErrorExternoAlPasarParams";
import { maxNumberSubscriptionPrice, minAmountUsesToExpired, minDaysToExpired, namePlanSubscriptionDefault, newPlanSubscriptionTimeDefault, priceSubscriptionDefault, updateMethodQuantityDefault, updateMethodTimeDefault } from "../../helpers/ValoresDefault";
import { ITypeSubscription, IUpdateMethodQuantity, IUpdateMethodTime } from "../../interfaces/interfacesPlanSubscription";
import { PlanSubscriptionQuantity } from "../../planSubscriptions/PlanSubscriptionQuantity";
import { PlanSubscriptionTime } from "../../planSubscriptions/PlanSubscriptionTime";


//! REGLA PARA LOS TEST
//* Cada test que verifique una funcionalidad particular, usar todos los default salvo la funcion a probar. Ejemplo precio. Todo default pero no puedo usar priceDefault, debe ser 100.

describe('Escenario 01 - SUBSCRIPTION - Pruebas', () => {

    // Crear una subscription time
    test('1.1 - Crear una SUBSCRIPTION TIME', () => {
     
        let subscription1 = newPlanSubscriptionTimeDefault; 
        subscription1.name = "premium";
        subscription1.updateMethod;

        const expirationMethod = subscription1.updateMethod;
        const subscriptionName = subscription1.name

        expect(expirationMethod).toBe(IUpdateMethodTime.EXPIRATIONDATE)
        expect(subscriptionName).toBe("premium")
    });

    // Crear una subscription quantity
    test('1.2 - Crear una SUBSCRIPTION QUANTITY', () => {
     
        let subscription1 = new PlanSubscriptionQuantity("tenUses", IUpdateMethodQuantity.AMOUNTUSES, minAmountUsesToExpired + 30  , priceSubscriptionDefault); 
        subscription1.name = "tenUses";
        subscription1.amountUsesToExpired = 10;

        const expirationMethod = subscription1.updateMethod;
        const subscriptionName = subscription1.name
        const amountUses = subscription1.amountUsesToExpired;

        expect(expirationMethod).toBe(IUpdateMethodQuantity.AMOUNTUSES)
        expect(subscriptionName).toBe("tenUses")
        expect(amountUses).toBe(10);
    });


});

//? - - - - - - - - -  PRICE - - - - -  -- - - -  // 

describe('Escenario 03 - PLANSUBSCRIPTION - PRICE', () => { 

    //? Crear desde el constructor.
    test('3.1- constructor ', () => {
        let planSubscription1  = new PlanSubscriptionTime(namePlanSubscriptionDefault, updateMethodTimeDefault, minDaysToExpired , 100); 
       
        expect(planSubscription1.price).toBe(100)
    });

    //? Cambiar el precio.
    test('3.2- set  ', () => {
        let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, updateMethodTimeDefault, minDaysToExpired, priceSubscriptionDefault); 
            planSubscription1.price = 9999
        expect(planSubscription1.price).toBe(9999)
    });


    //! Error min number desde constructor.
    test('3.3- ERROR MIN NUMBER constructor ', () => {
        try {
            let planSubscription1 = new PlanSubscriptionQuantity(namePlanSubscriptionDefault, updateMethodQuantityDefault, minAmountUsesToExpired , -10); 
    
            expect(planSubscription1.price).toBe(-10)
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });

    //! Error min number cambiando con set.
    test('3.4- ERROR MIN NUMBER set ', () => {
        try {
            let planSubscription1 = new PlanSubscriptionQuantity(namePlanSubscriptionDefault, updateMethodQuantityDefault, minAmountUsesToExpired , 100); 
            planSubscription1.price = -10; 
    
            expect(planSubscription1.price).toBe(-10)
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });
    
    //! Error max number desde constructor.
    test('3.5- ERROR  MAX NUMBER Constructor ', () => {
        try {
            let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, updateMethodTimeDefault, minDaysToExpired + 1,  maxNumberSubscriptionPrice + 1); 
    
            expect(planSubscription1.price).toBe(maxNumberSubscriptionPrice + 1)
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });

    //! Error max number cambiando con set.
     test('3.6- ERROR  MAX NUMBER set ', () => {
        try {
            let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, updateMethodTimeDefault, minDaysToExpired + 1,  maxNumberSubscriptionPrice - 99); 
            planSubscription1.price = maxNumberSubscriptionPrice + 1; 
    
            expect(planSubscription1.price).toBe(maxNumberSubscriptionPrice + 1)
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });
});



//? - - - - - - - - -  TYPE SUBSCRIPTION  - - - - -  -- - - -  //

//* Instancias de los dos hijos de planSubscription para verificar el tipo de suscripcion creado autoamticamente.
describe('Escenario 02 - PLANSUBSCRIPTION - TYPE SUBSCRIPTION', () => {

    //? TIME
    test('3.1- Time ', () => {
        let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, updateMethodTimeDefault, minDaysToExpired, 100);
        let tipoSuscripcion = planSubscription1.typeSubscription 
        
        expect(tipoSuscripcion).toBe(ITypeSubscription.TIME)
    });

    //? QUANTITY
    test('3.2- Quantity ', () => {
        let planSubscription1 = new PlanSubscriptionQuantity(namePlanSubscriptionDefault, updateMethodQuantityDefault, minAmountUsesToExpired, 100);
        let tipoSuscripcion =  planSubscription1.typeSubscription 
       
        expect(tipoSuscripcion).toBe(ITypeSubscription.QUANTITY)
    });

});


//? - - - - - - - - -  UPDATE METHOD  - - - - -  -- - - -  // 

describe('Escenario 03 - PLANSUBSCRIPTION - UPDATE METHOD', () => {

    //? EXPIRATION DATE 
    test('3.1- EXPIRATION DATE ', () => {
        let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, IUpdateMethodTime.EXPIRATIONDATE, minDaysToExpired, 100);
        let updateMethod = planSubscription1.updateMethod
        
        expect(updateMethod).toBe(IUpdateMethodTime.EXPIRATIONDATE)
    });

    //? LASTPAYMENT
    test('3.2- LASTPAYMENT ', () => {
        let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, IUpdateMethodTime.LASTPAYMENT, minDaysToExpired, 100);
        let updateMethod = planSubscription1.updateMethod

        expect(updateMethod).toBe(IUpdateMethodTime.LASTPAYMENT)
    });

    //? MONTH
    test('3.3- MONTH ', () => {
        let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, IUpdateMethodTime.MONTH, minDaysToExpired, 100);
        let updateMethod = planSubscription1.updateMethod

        expect(updateMethod).toBe(IUpdateMethodTime.MONTH)
    });


    //! Caso falso
    test('3.4- MONTH ', () => {
        let planSubscription1 = new PlanSubscriptionTime(namePlanSubscriptionDefault, IUpdateMethodTime.MONTH, minDaysToExpired, 100);
        let updateMethod = planSubscription1.updateMethod

        expect(updateMethod).not.toBe(IUpdateMethodTime.LASTPAYMENT)
    });

});