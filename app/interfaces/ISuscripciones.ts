export enum ITiposuscripcion {
    VOID = "",
    // PREMIUM = {"nombre: "premium",monto: 1000}",
    PREMIUM = "premium",
    PLATINUM = "platinum",
    GOLD = "gold",
    CANTIDADVECESUNICAS10 = "cantidadVecesUnicas10", // Todo, suscripcion por cantidad de usos.
}

export enum IValorTipoSuscripcion {
    VOID = "",
    PREMIUM = 5000,
    PLATINUM = 7500,
    GOLD = 10000,
    CANTIDADVECESUNICAS10 = 3000, // Todo, suscripcion por cantidad de usos.
    PRUEBA = -1000,
}

export enum IMetodoPago {
    VOID = "",
    EFECTIVO = "efectivo",
    TARJETA = "tarjeta",
    DOSMETODOSPAGODIFERENTES = "dosMetodosPagoDiferentes", //Todo Verificar.
}

export enum IEstadoPago {
    VOID = "",
    GENERADO = "generado",
    COMPLETADO = "completado",
}

export enum IEstadoSuscriptor {
    VOID = "",
    ACTIVO = "activo",
    DEUDOR = "deudor"
}

export enum ITipoPago{
    VOID = "",
    PAGOSUSCRIPCION = "pagoSuscripcion",
    PAGOPRODUCTO = "pagoProducto",
    PAGOMATRICULA = "pagoMatricula",
    PAGOEXTRAORDINARIO = "pagoExtraordinario",
}

export enum IGenero{
    VOID = "",
    MASCULINO = "masculino",
    FEMENINO = "femenini",
    OTRO = "otro"
}

/**
 * Metodo actualizarFechaVencimiento del suscriptor. Por parametro, se decide que metodo utiliza el usuario/gimnasio.
 * fechaVencimientosuscripcion: no importa cuando pague. Los dias corren a partir de su fecha que vencio.
 * ultimoPago: importa que pague hoy. A partir de hoy se cuentan los dias.
 */
export enum IMetodoActualizacionFechaVencimiento{
    VOID = "",
    FECHAVENCIMIENTOSUSCRIPCION = "fechaVencimientoSuscripcion",
    ULTIMOPAGO = "ultimoPago",
}