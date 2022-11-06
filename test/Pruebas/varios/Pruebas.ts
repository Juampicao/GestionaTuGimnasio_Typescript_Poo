
export enum IModule {
    PAYMENTS = "payments",
    BILLS = "bills",
}

export enum IPlanSubscription {
    PREMUM = "premium",
    STANDARD = "standard"
}

export enum IRol{
    PAYMENTMAKER = "paymentMaker",
    EXERCISEMAKER = "excerciseMaker",
    BILLMAKER = "billMaker",
}



//? Usuario
export class User {
    private _name: string;
    private _moduleAccesList: Array<IModule>; 
    private _planSubscription: IPlanSubscription;
    private _rolList: Array<IRol.PAYMENTMAKER> = [IRol.PAYMENTMAKER]  

    constructor(name: string, planSubscription: IPlanSubscription = IPlanSubscription.PREMUM) {
        this._name = name;
        this._planSubscription = planSubscription;
        this._moduleAccesList = [];
     }
    
     
    get planSubscription(): IPlanSubscription{
        return this._planSubscription; 
    }
    
    get moduleAccesList(): Array<IModule>{
        return this._moduleAccesList;
    }

    get rol(): Array<IRol.PAYMENTMAKER>{
        return this._rolList;
    }
    
    addModuleAccess(newAccessModule: IModule): Array<IModule> {
        
        if (isValidAccessModuleByPlanSubscription(this._planSubscription)) {
            this._moduleAccesList.push(newAccessModule)
        } else {
            throw new Error(`el plan ${this._planSubscription} no tiene acceso al modulo ${newAccessModule}`)
        }

        return this._moduleAccesList;
    }
}



//? Modulo
export class Module {
	
	// Required module name to access.
    private _moduleAccessValid: IModule;  
    private _rolAvailable: Array<IRol> = [IRol.PAYMENTMAKER]  
	
	constructor(moduleName : IModule){
        this._moduleAccessValid = moduleName;
	}
	
	// Verify if this usuario has access to this module.
	hasModuleAccess(usuario : User) : boolean {
		if(usuario.moduleAccesList.includes(this._moduleAccessValid)){
			return true
        };
      
		return false;
    }
    
    get rolAvailable(): Array<IRol> {
        return this._rolAvailable;
    }

}


// ? ------------------ FUNCTIONS -------------------/
// if planSubscription = Premium return True.
export function isValidAccessModuleByPlanSubscription(planSubscription : IPlanSubscription) : boolean{
    if (planSubscription === IPlanSubscription.PREMUM) {
        return true;
    } else {
        return false;
    }
}



//? -------------- Access Manager Service Interface  ---------- //?
export interface IAccessManagerService{

    /**
     * 
     * @param usuario: User who want to access
     * @param module: Module which want to access.
     */
    hasModuleAccess(usuario: User, module : IModule): boolean;

    createAccess(usuario: User): User; 
}

//? -------------- Access Manager Service Mock ---------- //?
export class AccessManagerServiceMock implements IAccessManagerService {
    
    constructor() { }

    hasModuleAccess(usuario : User, module : IModule) : boolean {
		if(usuario.moduleAccesList.includes(module)){
			return true
        };
      
		return false;
	}

    createAccess(usuario: User): User {
        throw new Error("Method not implemented.");
    }

}

//? -------------- Access Manager  ---------- //?

export class AccessManager {

    private _service: IAccessManagerService;

    constructor(service: IAccessManagerService = new AccessManagerServiceMock()) {
        this._service = service; 
    }

    /**
     * Verify if this User can access to PaymentsModule.
     * @param usuario : User who want to access.
     * @return boolean. 
     */
    // hasAccessToPaymentsModule(usuario : User) : Boolean {
        
    //     let paymentModule = IModule.PAYMENTS;

    //     return this._service.hasModuleAccess(usuario,paymentModule);
    // }

    hasAccessToPaymentsModule(rol : IRol) : Boolean {
        
        let paymentModule = IModule.PAYMENTS;

        return this._service.hasModuleAccess(usuario,paymentModule);
    }

}

//? -------------- Caso Ejemplo 1  ---------- //? 

const user1 = new User("juan", IPlanSubscription.PREMUM)
user1.addModuleAccess(IModule.PAYMENTS);

const PaymentsModule = new Module(IModule.PAYMENTS);

PaymentsModule.hasModuleAccess(user1);


//? -------------- Caso Ejemplo 2  ---------- //? 

let accessManager = new AccessManager(new AccessManagerServiceMock()); 
accessManager.hasAccessToPaymentsModule(user1)



// Todo: HasAcces debe ser un servicio, que le paso un usuario. No el propio usuario. El usuario solo dice que modulos tiene.
// Dar roles. Pagador, CreadorRutinas. El pagador, tiene los 4 permisos. Lo asigno pagador al user1.
// Pagador => Modulo pagos. Tiene 4 permisos posibles. Le asigno el que quiero. Crear pago es Maker. Si tiene maker, puede hacer un pago.
// Un plan tiene ciertos modulos y accesos.
// Rol free. Le agrego el free a cada modulo. Si soy free, paso a todos.
// AccessManager, crea los nuevos roles. Agrega modulos y acciones por modulo. Si soy rol A, tengo acceso a modulo A. Aca no hay usuarios.
// frontend yo dueño de la app. Puedo agregar roles, veo todos gracias al accessManager. Ejemplo profesor, trae con el, todos los modulos y acciones del profesor.
// Un usuario si puede decir que rol tenes. laguien pregunta a que modulo tiene acceso, me dice el rol y access maanger me dice que modulos tiene acceso.
// 2 roels de pagador. pagadorCreadorViewer y pagadorCreadorPagador.
// 3 Modulos. 1 , 2 y 3. Por cada uno, hay 4 permisos. PagadorViewer, pagadorEditor,pagadorDeleter y PagadorCreator. asi con los demas. Le agrego los que yo quiera.


