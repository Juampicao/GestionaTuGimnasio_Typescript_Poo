export enum ITiposuscripcion {
    VOID = "",
    // PREMIUM = {"nombre: "premium",monto: 1000}",
    PREMIUM = "premium",
    PLATINUM = "platinum",
    GOLD = "gold",
}

export enum IValorTipoSuscripcion {
    VOID = "",
    PREMIUM = 5000,
    PLATINUM = 7500,
    GOLD = 10000,
    PRUEBA = -1000,
}

export enum IMetodoPago {
    VOID = "",
    EFECTIVO = "efectivo",
    TARJETA = "tarjeta",
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
