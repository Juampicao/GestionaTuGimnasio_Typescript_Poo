
import { ErrorExternoAlPasarParams } from "../../../test/error/ErrorExternoAlPasarParams"
import { minNumberPositive } from "./ValoresDefault";


/**
 * Verifica que el número entre en un rango de un mínimo y máximo valido.
 * @param numeroParametro : numero que quiero verificar sea válido.
 * @param minNumber : numero mínimo
 * @param maxNumber : numero Máximo
 * @returns boolean.
 */
export function isValidNumberReturnBoolean(numeroParametro : number, minNumber: number, maxNumber: number, ) : boolean {
    if (numeroParametro < minNumber || numeroParametro > maxNumber) {
        throw new ErrorExternoAlPasarParams(`El número debe ser mayor a ${minNumber} y menor a ${maxNumber}`)
    } 
    return true; 
}

/**
 * Verifica que el número entre en un rango de un mínimo y máximo valido.
 * @param numeroParametro : numero que quiero verificar sea válido.
 * @param minNumber : numero mínimo
 * @param maxNumber : numero Máximo
 * @returns number.
 */
export function isValidNumberReturnNumber(numeroParametro : number, minNumber: number, maxNumber: number, ) : number {
    if (numeroParametro < minNumber || numeroParametro > maxNumber) {
        throw new ErrorExternoAlPasarParams(`El número debe ser mayor a ${minNumber} y menor a ${maxNumber}`)
    } 
    return numeroParametro; 
}