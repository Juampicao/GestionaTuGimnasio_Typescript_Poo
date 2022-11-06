import { IExpirationUpdateMethodQuantity, IExpirationUpdateMethodTime, ISuscriptionUpdateMethod } from "../interfaces/interfaces";
import { Subscription } from "../subscriptions/Subscription";
import { SubscriptionQuantity } from "../subscriptions/SubscriptionQuantity";
import { PersonalInformation } from "./PersonalInformation";


export abstract class Subscriptor{
    
    private _id: number;
    private _personalInformation: PersonalInformation; 
    private _expiredDaySubscription: Date; 
    private _expiredAmountUsesSubscription: number;
    private _planSubscription: Subscription; 

    constructor() { }

    //* Personal Info
    set personalInformation(personalInformation: PersonalInformation) {
        this._personalInformation = personalInformation
        this._expiredAmountUsesSubscription = 0;
        this._expiredDaySubscription = new Date();
    }

    get personalInformation(): PersonalInformation {
        return this._personalInformation;
    }

    //* expired Subscripton Day
    get expiredDaySubscription(): Date{
        return this._expiredDaySubscription;
    }

    //* expired Subscripton Amount Uses.
    get expiredAmountUsesSubscription(): number{
        return this._expiredAmountUsesSubscription;
    }

    public updateExpiredDaySubscription() {
        
    }

    public updateExpiredAmountUsesSubscription() {
        
    }
    

    //* PLAN SUBSCRIPTION
    get planSubscription(): Subscription{
        return this._planSubscription;
    }

    set planSubscription(planSubscription: Subscription) {
        this._planSubscription = planSubscription;
    }
}



export class SubscriptorGym extends Subscriptor{

    constructor() {
        super()
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
    