import { Subscriptor } from "../Subscriptor"

export interface IUpdaterManagerService{

    

    /**
     ** Actualiza la fecha de vencimiento de un subscriptor.
     * @param subscriptor subscriptor a actualizar.
     * @param daysToAdd dias para sumar a la fecha de vencimiento actual.
     */
    UpdateSubscriptorExpiredByTime(subscriptor : Subscriptor, daysToAdd: number) : number

    /**
    ** Definir la nueva fecha de forma manual.
    ** Actualiza la fecha de vencimiento de un subscriptor.
    * @param subscriptor subscriptor a actualizar.
    * @param newDateToExpired dias para sumar a la fecha de vencimiento actual.
    */
    UpdateSubscriptorExpiredByTimeNewDate(subscriptor : Subscriptor, newDateToExpired: Date) : Date

    /**
     ** Actualiza la cantidad de usos para vencer de un subscriptor.
     * @param subscriptor subscriptor a actualizar.
     * @param amountUsesToAdd cantidad de usos para sumar al amountUses actual.
     */
    UpdateSubscriptorExpiredByQuantity(subscriptor: Subscriptor, amountUsesToAdd: number) : number
    

    /**
     ** Definir la nueva cantidad de forma manual.
     ** Actualiza la nueva cantidad de usos para vencer de un suscriptor. 
     * @param subscriptor subscriptor a actualizar.
     * @param newAmountUses nueva cantidad de usos para vencer. 
     */
    UpdateSubscriptorExpiredByQuantityNewAmount(subscriptor : Subscriptor, newAmountUses: number) : number


}