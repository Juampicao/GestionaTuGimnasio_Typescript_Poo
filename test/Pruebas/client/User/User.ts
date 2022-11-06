import { Client } from "../Client";

export class User {
    
    private _userName: string; 
    private _creator: Client; 

    constructor(userName: string, creator: Client) {
        this._userName = userName;
        this._creator = creator; 
    }

    get userName(): string{
        return this._userName;
    }

    get creator(): Client{
        return this._creator;
    }

}

let clientVikingo = new Client("Vikingos Gym");
let administrativoVikingo = new User("adminsitrativo", clientVikingo);