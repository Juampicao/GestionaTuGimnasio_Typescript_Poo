import { SuscriptorFilter } from "../../models/filter/SuscriptorFilter";
import { Suscriptor } from "../../models/main/suscriptor/Suscriptor";

export interface ISuscritorManagerService{
 
    getSuscriptoresByFilter(filter : SuscriptorFilter): Suscriptor[];

}