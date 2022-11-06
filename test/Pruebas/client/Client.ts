//? Usuario
export class Client {
    
    protected _clientName: string;

    constructor(clientName: string) {
        this._clientName = clientName;
    }

}

// private _moduleAccesList: Array<IModule>; 
// private _planSubscription: IPlanSubscription;
// private _rolList: Array<IRol.PAYMENTMAKER> = [IRol.PAYMENTMAKER]  

// constructor(name: string, planSubscription: IPlanSubscription = IPlanSubscription.PREMUM) {
//     this._name = name;
//     this._planSubscription = planSubscription;
//     this._moduleAccesList = [];
//  }

    
// get planSubscription(): IPlanSubscription{
//     return this._planSubscription; 
// }

// get moduleAccesList(): Array<IModule>{
//     return this._moduleAccesList;
// }

// get rol(): Array<IRol.PAYMENTMAKER>{
//     return this._rolList;
// }

// addModuleAccess(newAccessModule: IModule): Array<IModule> {
    
//     if (isValidAccessModuleByPlanSubscription(this._planSubscription)) {
//         this._moduleAccesList.push(newAccessModule)
//     } else {
//         throw new Error(`el plan ${this._planSubscription} no tiene acceso al modulo ${newAccessModule}`)
//     }

//     return this._moduleAccesList;
// }