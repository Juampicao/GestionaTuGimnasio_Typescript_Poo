import { ErrorExternoAlPasarParams } from "../../../../app/error/ErrorExternoAlPasarParams";
import { IMusculo } from "../../../../app/interfaces/InterfaceEjercicios";
import { EjercicioGeneral } from "../../../../app/models/main/seccionEjercicios/EjercicioGeneral";
import { EjercicioSuscriptor } from "../../../../app/models/main/seccionEjercicios/EjercicioSuscriptor";


/**
 * 1) Musculos.
 */

// ? - - - - - - - - - - - - - - MUSCULOS- - - - - - - - - - - - - - 
describe('Escenario 01 - EJERCICIO - MUSCULOS', () => {

    // Default
    test('1.1 - Crear con musculos.', () => {
   
        let ejercicio = new EjercicioGeneral()
        ejercicio.musculos = [IMusculo.BICEP, IMusculo.TRICEP]
    });
    
    test('1.2 - Eliminar un musculo a ejercicio creado.', () => {
        let ejercicio = new EjercicioGeneral()
        ejercicio.musculos = [IMusculo.BICEP, IMusculo.TRICEP]
        ejercicio.removeMusculo(IMusculo.BICEP)

        expect(ejercicio.musculos).toStrictEqual([IMusculo.TRICEP]);
    });

    test('1.3- Agregar un musculo a ejercicio creado.', () => {
   
        let ejercicio = new EjercicioGeneral()
        ejercicio.musculos = [IMusculo.BICEP, IMusculo.TRICEP]
        ejercicio.addMusculos(IMusculo.DORSALES);

        expect(ejercicio.musculos).toStrictEqual([IMusculo.BICEP,IMusculo.TRICEP,IMusculo.DORSALES])
    });

    test('1.4 - Agregar un musculo a ejercicio REPETIDO.', () => {
   
        try {
            let ejercicio = new EjercicioGeneral()
            ejercicio.musculos = [IMusculo.BICEP, IMusculo.TRICEP]
            ejercicio.addMusculos(IMusculo.BICEP);
    
            expect(ejercicio.musculos).toStrictEqual([IMusculo.BICEP,IMusculo.TRICEP,IMusculo.DORSALES])
        } catch (error) {
            expect(error).toBeInstanceOf(ErrorExternoAlPasarParams);
        }
    });
});

// ? - - - - - - - - - - - - - - Nombres- - - - - - - - - - - - - - 
describe('Escenario 01 - EJERCICIO - NOMBRE', () => {

    // Default
    test('1.1 - NOMBRE ', () => {
   
        let ejercicio = new EjercicioGeneral()
        ejercicio.nombre = "musculo";

        let ejercicioSuscriptor = new EjercicioSuscriptor();
        ejercicioSuscriptor.ejercicio = ejercicio;

        console.log("ejercicio es=", ejercicioSuscriptor.ejercicio.toString())
        expect(1+1).toBe(2)
    });
});