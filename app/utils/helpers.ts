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

export function generateEjercicioId() {
  return randoNumber(5000,6000)
}


export function generateNumeroSocio() {
  return randoNumber(0,10000)
}


/**
 * Función que suma una cantidad de dias X a una fecha vieja.
 * @param fechaVieja : Fecha que deseo actualizar.
 * @param diasAActualizar : Cantidad de dias a sumar.
 * @returns 
 */
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

/**
 * Todo Explicar para que sirve
 * @param title 
 * @param array1 
 * @param array2 
 * @returns 
 */
export function containSimilarWords(title: string, array1: string, array2: string): Boolean {
  
  let array1ToArray = array1.split(" ")
  let array2ToArray = array2.split(" ")

  console.log("array1ToArray=", array1ToArray, "array2ToArray=", array2ToArray)
  
  for (let i = 0; i < array1ToArray.length; i++) {
    for (let j = 0; j < array2ToArray.length; j++) {
      if (array1ToArray[i].toLowerCase() === array2ToArray[j].toLowerCase()) {
        return true
      }
    }
  }
  
  return false
};




/**
 * Todo Explicar para que sirve
 * @param title 
 * @returns 
 */
export function containTitle(title: string): Boolean {
    
        let titleArray = title.split(" ")
        let thisTitle = this._title.split(" ")

        console.log("titleArray=", titleArray, "thisTItle=", thisTitle)
        
        for (let i = 0; i < titleArray.length; i++) {
            for (let j = 0; j < thisTitle.length; j++) {
                if (titleArray[i].toLowerCase() === thisTitle[j].toLowerCase()) {
                    return true
                }
            }
        }
        
        return false
    };

//Tip : Secuencias en base de dato relacional. Secuencia.nextval (para que no se repita)