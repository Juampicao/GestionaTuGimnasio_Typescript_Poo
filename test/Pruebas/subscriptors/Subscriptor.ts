import { ISubscriptorStatus } from "../interfaces/InterfacesSubscriptor";
import { PlanSubscription } from "../plansubscriptions/PlanSubscription";
import { PlanSubscriptionQuantity } from "../planSubscriptions/PlanSubscriptionQuantity";
import { PlanSubscriptionTime } from "../planSubscriptions/PlanSubscriptionTime";
import { PersonalInformation } from "./PersonalInformation";
import { Subscription } from "./Subscription";


export abstract class Subscriptor{
    
    private _id: number;
    private _personalInformation: PersonalInformation; 
    private _expiredDaySubscription: Date; 
    private _expiredAmountUsesSubscription: number;
    private _status: ISubscriptorStatus; 
    private _planSubscription: PlanSubscription;
    private _subscription: Subscription; 

    constructor(planSubscription: PlanSubscription) {
        this._planSubscription = planSubscription;
        this._subscription = this.updateSubscription(this._planSubscription);
    }

    //* Subscription
    updateSubscription(planSubscription : PlanSubscription) {
        let subscription = new Subscription(planSubscription); 
        this._subscription = subscription; 
        return subscription; 
    }

    // set subscription(planSubscription : PlanSubscription) {
    //     let subscription = new Subscription(planSubscription); 
    //     this._subscription = subscription; 
    // }

    get subscription() : Subscription {
        return this._subscription; 
    }

    //* Personal Info
    set personalInformation(personalInformation: PersonalInformation) {
        this._personalInformation = personalInformation
        this._expiredAmountUsesSubscription = 0;
        this._expiredDaySubscription = new Date();
    }

    get personalInformation(): PersonalInformation {
        return this._personalInformation;
    }

    /**
     * @return cantidad de dias que le quedan al suscriptor para vencer su plan. 
     */
    get expiredDaySubscription(): Date{
        return this._expiredDaySubscription;
    }

    /**
    * @return cantidad de dias que le quedan al suscriptor para vencer su plan. 
    */
    get expiredAmountUsesSubscription(): number{
        return this._expiredAmountUsesSubscription;
    }


    public updateExpiredAmountUsesSubscription() {
        
    }
    //* PLAN SUBSCRIPTION
    get planSubscription(): PlanSubscription {
        return this._planSubscription;
    }

    set planSubscription(planSubscription: PlanSubscription) {
        this._planSubscription = planSubscription;
    }
    
    /**
    * ? Actualiza la fecha de vencimiento del suscriptor y cambia el estado del suscriptor en base al metodo de actualizacion de cada suscripcion.
    * @param diasAActualizar : numero dias que quiero sumarle a la fecha de vencimiento.
    * @param metodoActualizacion: metodo para actualizar la fecha vencimiento.
    * @returns nueva fecha de vencimiento.
    */
    // public updateExpiredDaySubscription(diasAActualizar: number = DiasActualizacionFechaVencimientoDefault, metodoActualizacion: IMetodoActualizacionFechaVencimiento = MetodoActualizacionVencimientoDefault) {
        
    //         if (metodoActualizacion = IMetodoActualizacionFechaVencimiento.FECHAVENCIMIENTOSUSCRIPCION) {
    //                 this._fechaVencimientoSuscripcion = sumarDiasAFechas(this._fechaVencimientoSuscripcion, diasAActualizar)
    //             } else {
    //                     let fechaPagoHoy = new Date();
    //                     this._fechaVencimientoSuscripcion = sumarDiasAFechas(fechaPagoHoy, diasAActualizar)
    //                 }
                
    //                 if (this._fechaVencimientoSuscripcion.toDateString() <= new Date().toDateString()) {
    //         this._estado = IEstadoSuscriptor.ACTIVO;
    //     }
    
    //     return this._fechaVencimientoSuscripcion;
    // }

    set status(status: ISubscriptorStatus) {
        this._status = status; 
    }

    get status(): ISubscriptorStatus {
        return this._status;
    }
    
}




    // set expiredSubscripton(expiredSubscripton: number | Date) {

    //     if (this._planSubscription.updateMethod === ISuscriptionUpdateMethod.TIME) {
    //         this._expiredSubscripton = expiredSubscripton;
    //     }

    //     this._expiredSubscripton = expiredSubscripton;
    // }

    //    /**
    // * ? Actualiza la fecha de vencimiento del suscriptor y cambia el estado del suscriptor en base al metodo de actualizacion de cada suscripcion.
    // * @param diasAActualizar : numero dias que quiero sumarle a la fecha de vencimiento.
    // * @param metodoActualizacion: metodo para actualizar la fecha vencimiento.
    // * @returns nueva fecha de vencimiento.
    // */
    // actualizarFechaVencimiento(diasAActualizar: number = DiasActualizacionFechaVencimientoDefault, metodoActualizacion: IMetodoActualizacionFechaVencimiento = MetodoActualizacionVencimientoDefault) {
       
    //     if (metodoActualizacion = IMetodoActualizacionFechaVencimiento.FECHAVENCIMIENTOSUSCRIPCION) {
    //         this._fechaVencimientoSuscripcion = sumarDiasAFechas(this._fechaVencimientoSuscripcion, diasAActualizar)
    //     } else {
    //         let fechaPagoHoy = new Date();
    //         this._fechaVencimientoSuscripcion = sumarDiasAFechas(fechaPagoHoy, diasAActualizar)
    //     }

    //     if (this._fechaVencimientoSuscripcion.toDateString() <= new Date().toDateString()) {
    //         this._estado = IEstadoSuscriptor.ACTIVO;
    //     }

    //     return this._fechaVencimientoSuscripcion;
    // }
    