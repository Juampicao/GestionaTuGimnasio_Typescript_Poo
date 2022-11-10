

import { ICreatorSubscriptionService } from "./ICreatorSubscriptionService";
import { PlanSubscriptionTime } from "../PlanSubscriptionTime";
import { PlanSubscriptionQuantity } from "../PlanSubscriptionQuantity";
import { IUpdateMethodTime, IUpdateMethodQuantity } from "../../interfaces/interfacesPlanSubscription";



export class CreatorSubscriptionService implements ICreatorSubscriptionService{

    CreateNewSubscriptionTime(nameSubscription: string, updateMethod: IUpdateMethodTime, daysExpired: number, price : number): PlanSubscriptionTime {
    
        const NameSubscription = nameSubscription; 
        const UpdateMethod = updateMethod;  
        const DaysExpired = daysExpired;
        const Price = price; 

        const newSubscription = new PlanSubscriptionTime(NameSubscription, UpdateMethod, DaysExpired, Price);

        return newSubscription; 
    }


    CreateNewSubscriptionQuantity(nameSubscription: string, updateMethod: IUpdateMethodQuantity,amountUsesToExpired: number, price : number): PlanSubscriptionQuantity {
        
        const NameSubscription = nameSubscription; 
        const UpdateMethod = updateMethod; 
        const AmountUsesToExpired = amountUsesToExpired;
        const Price = price; 
        

        const newSubscription = new PlanSubscriptionQuantity(NameSubscription, UpdateMethod,AmountUsesToExpired , Price);

        return newSubscription; 
    }

}

let crearSubscriptorQuantity = new CreatorSubscriptionService().CreateNewSubscriptionQuantity("premium", IUpdateMethodQuantity.AMOUNTUSES, 10 , 9999);