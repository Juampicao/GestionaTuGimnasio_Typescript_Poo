export class PersonalInformation{
    
    private _name: string;
    private _age: number;

    constructor(name: string, age:number) {
        this._age = age;
        this._name = name;
     }

    set name(name: string) {
        this._name = name;
    }

    get name() : string{
        return this._name
    }

    set age(age: number)  {
        this._age = age;
    }

    get age(): number{
        return this._age;
    }
}