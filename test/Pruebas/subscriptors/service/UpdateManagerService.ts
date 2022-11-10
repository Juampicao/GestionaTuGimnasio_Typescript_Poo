import { Subscriptor } from "../Subscriptor";
import { IUpdaterManagerService } from "./IUpdaterManagerService";

export class UpdateManagerService implements IUpdaterManagerService{


    UpdateSubscriptorExpiredByTime(subscriptor: Subscriptor, daysToAdd: number): number {
        throw new Error("Method not implemented.");
    }


    UpdateSubscriptorExpiredByTimeNewDate(subscriptor: Subscriptor, newDateToExpired: Date): Date {
        throw new Error("Method not implemented.");
    }


    UpdateSubscriptorExpiredByQuantity(subscriptor: Subscriptor, amountUsesToAdd: number): number {
        throw new Error("Method not implemented.");
    }

    
    UpdateSubscriptorExpiredByQuantityNewAmount(subscriptor: Subscriptor, newAmountUses: number): number {
        throw new Error("Method not implemented.");
    }
    
}