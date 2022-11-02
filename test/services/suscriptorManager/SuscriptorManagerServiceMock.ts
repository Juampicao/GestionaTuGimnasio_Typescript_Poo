import { IPagosManagerService } from "../../../app/interfaces/services/IPagosManagerService";
import { NuevoPago } from "../../../app/models/main/pago/NuevoPago";
import { PagoFilter } from "../../../app/models/filter/PagoFilter";
import { CustomLogger } from "../../../app/utils/CustomLogger";
import {NoHayResultadosError} from "../../../app/error/NoHayResultadosError"
import { CrearPagosPrueba } from "../../utils/CrearPagosPrueba";
import { Suscriptor } from "../../../app/models/main/suscriptor/Suscriptor";
import {CrearSuscriptoresPrueba} from "../../utils/CrearSuscriptoresPrueba"
import { ISuscritorManagerService } from "../../../app/interfaces/services/ISuscriptorManagerService";
import { SuscriptorFilter } from "../../../app/models/filter/SuscriptorFilter";
import PagingUtils from "../../../app/utils/pagination/SuscriptoresPagination";


let customLogger = new CustomLogger()

export class SuscriptorManagerServiceMock implements ISuscritorManagerService{

    private _suscriptorList: Array<Suscriptor>;

    constructor() {  
        this._suscriptorList = new CrearSuscriptoresPrueba().get3SuscriptoresList();
    }
   
    getAllSuscriptores(): Array<Suscriptor> {
        return this._suscriptorList
    }
    
   
    getSuscriptoresByFilterPaged(filter: SuscriptorFilter, page: number = 1, limit: number = 2, order: any = "desc") : Suscriptor[] {

        let result = this.getSuscriptoresByFilter(filter);

        return PagingUtils.getSuscriptoresByFilterByPagination(page,limit,order, result)
    }
    
    
    getSuscriptoresByFilter(filter: SuscriptorFilter): Suscriptor[] { 
         
        let voidFilter = new SuscriptorFilter();

        let _filterSuscriptorList: Array<Suscriptor> = []; 
    

        for (let i = 0; i < this._suscriptorList.length; i++) {
         
            //? Data (Nombre / Apellido & futuro Dni y Socio)
            if (filter.data !== voidFilter.data) {
                
                if (this._suscriptorList[i].containsData(filter.data)) {     
                    
                    _filterSuscriptorList.push(this._suscriptorList[i])
                }

                continue;
            }

            if (filter.genero !== voidFilter.genero) {
                
                if (this._suscriptorList[i].genero = filter.genero) {     
                    
                    _filterSuscriptorList.push(this._suscriptorList[i])
                }

                continue;
            }

        }

        if (_filterSuscriptorList.length <= 0) {
            throw new NoHayResultadosError(`No hay ningun resultado para esta busqueda con estos filtros ${(JSON.stringify(filter, null, 2))} .`)
            // throw new NoHayResultadosError(`No hay ningun resultado para esta busqueda con estos filtros ${filter.toString()} .`)
        } else {
            return _filterSuscriptorList; 
        }
    
    }

}



















