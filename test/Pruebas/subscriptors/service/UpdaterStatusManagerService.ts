import { ISubscriptorStatus } from "../../interfaces/InterfacesSubscriptor";
import { Subscriptor } from "../Subscriptor";
import { IUpdaterStatusManagerService } from "./IUpdaterStatusManagerService";

export class UpdaterStatusManagerService implements IUpdaterStatusManagerService{
    
    
    updateSubscriptorStatusByTime(subscriptor: Subscriptor): ISubscriptorStatus {
       
        let expiredDate = subscriptor.expiredDaySubscription; 
        
        expiredDate.toDateString() <= new Date().toDateString() ? ISubscriptorStatus.DEUDOR : ISubscriptorStatus.ACTIVO;
      
        return subscriptor.status; 
    }
    
    updateSubscriptorStatusByQuantity(subscriptor: Subscriptor): ISubscriptorStatus {
       
        let expiredAmount = subscriptor.expiredAmountUsesSubscription; 

        expiredAmount <= 0 ? ISubscriptorStatus.DEUDOR : ISubscriptorStatus.ACTIVO;
        
        return subscriptor.status;
    }
}