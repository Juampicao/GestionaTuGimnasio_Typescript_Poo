import { IMetodoPago } from "../../../../app/interfaces/ISuscripciones";
import { Suscriptor } from "../../../../app/models/main/suscriptor/Suscriptor";
import { PaymentProduct } from "../../payments/PaymentProduct";
import { PaymentSubscription } from "../../payments/PaymentSubscription";


export interface IPaymentservice{
    
    /**
    * Crear un nuevo pago de tipo suscripcion.
    * Toma los datos del suscriptor, suscripcion adherida, monto de la suscripcion de forma automatica.
    * Actualiza la fecha de vencimiento segun el tipo de suscripcion.
    * @param suscriptorPagador : Suscriptor pagador de la suscripcion.
    * @param fechaCreacion: fecha del pago.
    * @param metodoPago: Metodo a pagar.
    * @returns PaymentSubscription.
    */
    CrearNuevoPagoSuscripcion(suscriptorPagador : Suscriptor, fechaCreacion: Date, metodoPago: IMetodoPago) : PaymentSubscription, 


    /**
     * Funciolidad solo de pago. Al realizar el pago completado de este, llama a otra función que es ActualizarStockProducto(producto: Producto, cantidadProductoDisminuida : number). 
     * @param pagador : persona que abone el producto.
     * @param producto : producto comprado.
     * @return PaymentProduct
     */
    CrearNuevoPagoProducto(pagador: any, producto: string): PaymentProduct;
    
}