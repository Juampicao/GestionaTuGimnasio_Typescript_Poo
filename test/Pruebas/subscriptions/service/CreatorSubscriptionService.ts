
import { IExpirationUpdateMethodQuantity, IExpirationUpdateMethodTime } from "../../interfaces/interfaces";
import { SubscriptionQuantity } from "../SubscriptionQuantity";
import { SubscriptionTime } from "../SubscriptionTime";
import { ICreatorSubscriptionService } from "./ICreatorSubscriptionService";


export class CreatorSubscriptionService implements ICreatorSubscriptionService{

    CreateNewSubscriptionTime(nameSubscription: string, updateMethod: IExpirationUpdateMethodTime, daysExpired: number, price : number): SubscriptionTime {
    
        const NameSubscription = nameSubscription; 
        const UpdateMethod = updateMethod;  
        const Price = price; 
        const DaysExpired = daysExpired;

        const newSubscription = new SubscriptionTime(NameSubscription, UpdateMethod, DaysExpired, Price);

        return newSubscription; 
    }


    CreateNewSubscriptionQuantity(nameSubscription: string, updateMethod: IExpirationUpdateMethodQuantity,amountUsesToExpired: number, price : number): SubscriptionQuantity {
        
        const NameSubscription = nameSubscription; 
        const UpdateMethod = updateMethod; 
        const Price = price; 
        const AmountUsesToExpired = amountUsesToExpired;
        

        const newSubscription = new SubscriptionQuantity(NameSubscription, UpdateMethod,AmountUsesToExpired , Price);

        return newSubscription; 
    }

}

let crearSubscriptorQuantity = new CreatorSubscriptionService().CreateNewSubscriptionQuantity("premium", IExpirationUpdateMethodQuantity.AMOUNTUSES, 10 , 9999);