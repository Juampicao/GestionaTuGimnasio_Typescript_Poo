import { ISuscritorManagerService } from "../interfaces/services/ISuscriptorManagerService";
import { SuscriptorFilter } from "../models/filter/SuscriptorFilter";
import { Suscriptor } from "../models/main/suscriptor/Suscriptor";

export class SuscriptorManagerService implements ISuscritorManagerService{
  
    getSuscriptoresByFilter(filter: SuscriptorFilter): Suscriptor[] {
        throw new Error("Method not implemented.");
    }

    
}