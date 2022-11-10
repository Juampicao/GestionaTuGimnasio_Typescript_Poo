import { IModule, IPlanSubscription, Module, User } from "./Pruebas";


// ? - - - - - - - - - - - - - - ROLES - - - - - - - - - - - - - - 
describe('Escenario 01 - Caso simple', () => {

    describe('Escenario 01 - Payment Service Mock - ', () => {

    //? Constructor
    test('1.1-  ', () => {
        expect(1 + 1).toBe(2)
    });
    });
    
    // //! plan standard no tiene acceso al payments module.
    // test('1.1 - Caso simple', () => {
        
    //     try {
    //         const user1 = new User("juan", IPlanSubscription.STANDARD)
    //         user1.addModuleAccess(IModule.PAYMENTS);
    
    //         const PaymentsModule = new Module(IModule.PAYMENTS);
    
    //         let responseHasModuleAccess = PaymentsModule.hasModuleAccess(user1); 
        
    //         expect(responseHasModuleAccess).toBeFalsy();
    //     } catch (error) {
    //         expect(error).toBeInstanceOf(Error)
    //     }
    // })

    // //? Plan premium si tiene acceso al paymentsModule.
    // test('1.2 - Caso simple', () => {
        

    //     const user1 = new User("juan", IPlanSubscription.PREMUM)
    //     user1.addModuleAccess(IModule.PAYMENTS);

    //     const PaymentsModule = new Module(IModule.PAYMENTS);

    //     let responseHasModuleAccess = PaymentsModule.hasModuleAccess(user1); 
    
    //     expect(responseHasModuleAccess).toBeTruthy();
    // })


    // test('1.3 - Caso simple falso', () => {
        
    //     const user1 = new User("juan", IPlanSubscription.PREMUM)
    //     user1.addModuleAccess(IModule.PAYMENTS);

    //     const PaymentsModule = new Module(IModule.PAYMENTS);

    //     let responseHasModuleAccess = PaymentsModule.hasModuleAccess(user1); 
    
    //     // expect(responseHasModuleAccess).toBeFalsy();
    // })
});
