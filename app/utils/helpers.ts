export default function randoNumber(min: number, max: number) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

export function generatePagoId() {
  return randoNumber(10000,19999);
}

export function generateSuscriptorId() {
    return randoNumber(20000,29999);
}

export function generateUsuarioId() {
  return randoNumber(30000,39999);
}

export function generateNumeroSocio() {
  return randoNumber(0,10000)
}


export function sumarDiasAFechas(fechaVieja : Date, diasAActualizar : number) {
  fechaVieja.setDate(fechaVieja.getDate() + diasAActualizar);
  return fechaVieja;
}


/**
 * Generar passwords.
 * @param length : numero length de la password.
 * @returns 
 */
export function generatePassword(length : number){
  var chars = "abcdefghijklmnopqrstubwsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var password = '';    
    for(let i=0; i<length; i++){
      password+=chars.charAt(Math.floor(Math.random()*chars.length));
    }
  
  return password;
}

//Tip : Secuencias en base de dato relacional. Secuencia.nextval (para que no se repita)