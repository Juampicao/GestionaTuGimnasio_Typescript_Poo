// - - - - -  FECHA CREACION - - - - - //

import { IEstadoSuscriptor, IMetodoActualizacionFechaVencimiento, IMetodoPago, ITiposuscripcion, IValorTipoSuscripcion } from "../interfaces/ISuscripciones";
import { Suscripcion } from "../models/main/suscripcion/Suscripcion";

//? FechaCreacionPorDefecto
export const fechaCreacionDefault: Date = new Date();

//? FechaCreacion
export const maxFechaCreacion: Date = new Date("2040 01 01");
export const minFechaCreacion: Date = new Date("2000 01 01");

//? FechaCreacionSinceFilter
export const minFechaCreacionSince: Date = new Date("2000 01 01");
export const maxFechaCreacionSince: Date = new Date("2040 01 01");
export const FechaCreacionSinceDefault: Date = minFechaCreacionSince;

//? FechaCreacionUntilFilter
export const minFechaCreacionUntil: Date = new Date("2000 01 01");
export const maxFechaCreacionUntil: Date = new Date("2040 01 01");
export const FechaCreacionUntilDefault: Date = maxFechaCreacionUntil

//? FechaNacimiento
const today = new Date();
const year = today.getFullYear()
export const maxFechaNacimiento: Date = new Date(year, 1, 1)
export const minFechaNacimiento : Date = new Date(1900, 1,1)

// - - - - -  Monto Pago - -  - - - - //
export const montoTotalDefault: IValorTipoSuscripcion = IValorTipoSuscripcion.PREMIUM

// - - - - -  Tipo Suscripcion  - -  - - - - //
export const tipoSuscripcionDefault: ITiposuscripcion.PREMIUM = ITiposuscripcion.PREMIUM

// - - - - -  Metodo Pago  - -  - - - - //
export const metodoPagoDefault: IMetodoPago = IMetodoPago.EFECTIVO

// - - - - -  Suscripcion Default  - -  - - - - //            
export const suscripcionDefault: Suscripcion = new Suscripcion()
export const suscripcionValorDefault: IValorTipoSuscripcion = IValorTipoSuscripcion.PREMIUM;
export const suscripcionNombreDefault: ITiposuscripcion = ITiposuscripcion.PREMIUM;

// - - - - -  Estado  - -  - - - - //            
export const estadoSuscriptorDefault: IEstadoSuscriptor = IEstadoSuscriptor.DEUDOR;


// - - - - -   NUEVA FECHA DE ACTUALIZACION  - -  - - - - //            
export const DiasActualizacionFechaVencimientoDefault: number = 10;
export const MetodoActualizacionVencimientoDefault: IMetodoActualizacionFechaVencimiento = IMetodoActualizacionFechaVencimiento.FECHAVENCIMIENTOSUSCRIPCION;





            

