import { IPagosManagerService } from "../../../app/interfaces/services/IPagosManagerService";
import { NuevoPago } from "../../../app/models/main/pago/NuevoPago";
import { PagoFilter } from "../../../app/models/filter/PagoFilter";
import { CustomLogger } from "../../../app/utils/CustomLogger";
import {NoHayResultadosError} from "../../../app/error/NoHayResultadosError"
import { CrearPagosPrueba } from "../../utils/CrearPagosPrueba";
let customLogger = new CustomLogger()

export class PagosManagerServiceMock implements IPagosManagerService{

    private _pagosList: Array<NuevoPago>;

    constructor() {  
        this._pagosList = new CrearPagosPrueba().get3PagosList();
    }

    getAllContentsItems(): Array<NuevoPago> {
        return this._pagosList
    }
    
    //TODO
    // getContentItemsByFilterPaged(filter: PagoFilter, page: number = 1, limit: number = 2, order: any = "desc") : NuevoPago[] {

    //     // let result = this.getContentsItemsByFilter(filter);

    //     // return PagingUtils.getContentsItemsByFilterByPagination(page,limit,order, result)
    // }
    

    // ToDo: que sea parecido (3 letras?)
    getPagosItemsByFilter(filter: PagoFilter): Array<NuevoPago>  {  

        let voidFilter = new PagoFilter();
        let _filterPagosList: Array<NuevoPago> = []; 
        
        for (let i = 0; i < this._pagosList.length; i++) {
         
            //? Tipo Pago
            if (filter.tipoPago !== voidFilter.tipoPago) {
                
                if (this._pagosList[i].tipoPago === filter.tipoPago) {     
                    
                    _filterPagosList.push(this._pagosList[i])
                }

                continue;
            }

            //? Tipo Suscripcion
            //! No aparece TipoSuscripcion en NuevoPago.
            // if (filter.tipoSuscripcion !== voidFilter.tipoSuscripcion) {
                
            //     if (this._pagosList[i] === filter.tipoPago) {     
                    
            //         _filterPagosList.push(this._pagosList[i])
            //     }

            //     continue;
            // }

            //? Fecha Creacion
            if (filter.fechaCreacionSince !== voidFilter.fechaCreacionUntil || filter.fechaCreacionUntil !== voidFilter.fechaCreacionSince) {
                
                customLogger.logDebug(`desde el mock, el fechaCreacionSince=${filter.fechaCreacionSince}, fechaCreacionUntil=${filter.fechaCreacionUntil}`)
                if (this._pagosList[i].containsFechaCreacion(filter.fechaCreacionSince, filter.fechaCreacionUntil)) {

                    _filterPagosList.push(this._pagosList[i])
                }

                continue;
            }

            
            //? Creador
             if (filter.creador !== voidFilter.creador) {
                
                if (this._pagosList[i].creador === filter.creador) {     
                    
                    _filterPagosList.push(this._pagosList[i])
                }

                continue;
            }

            
            //? Metodo Pago
            if (filter.metodoPago !== voidFilter.metodoPago) {
                
                if (this._pagosList[i].metodoPago === filter.metodoPago) {     
                    
                    _filterPagosList.push(this._pagosList[i])
                }

                continue;
            }


            

        }

        if (_filterPagosList.length <= 0) {
            throw new NoHayResultadosError(`No hay ningun resultado para esta busqueda con estos filtros ${(JSON.stringify(filter, null, 2))} .`)
            // throw new NoHayResultadosError(`No hay ningun resultado para esta busqueda con estos filtros ${filter.toString()} .`)
        } else {
            return _filterPagosList; 
        }
    
    }

}



















