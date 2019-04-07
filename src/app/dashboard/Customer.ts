import {Vehicle} from './Vehicle';

export class Customer {
    private _id: number;
    private _name: string;
    private _address: string;
    private _vehicles: Vehicle[];
    private _createDateTime: any;
    private _updateDateTime: any;


    constructor(id: number, name: string, address: string, vehicles: Vehicle[], createDateTime: any, updateDateTime: any) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._vehicles = vehicles;
        this._createDateTime = createDateTime;
        this._updateDateTime = updateDateTime;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get vehicles(): Vehicle[] {
        return this._vehicles;
    }

    set vehicles(value: Vehicle[]) {
        this._vehicles = value;
    }

    get createDateTime(): any {
        return this._createDateTime;
    }

    set createDateTime(value: any) {
        this._createDateTime = value;
    }

    get updateDateTime(): any {
        return this._updateDateTime;
    }

    set updateDateTime(value: any) {
        this._updateDateTime = value;
    }
}