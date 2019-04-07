export class Vehicle {
    private _id: string;
    private _vin: string;
    private _regNum: string;
    private _connectedTo: number;
    private _createDateTime: any;
    private _updateDateTime: any;
    private _customerName: any;
    private _customerId: any;
    private _status: any;


    constructor(id: string, vin: string, regNum: string, connectedTo: number, createDateTime: any, updateDateTime: any, customerName: any, customerId: any) {
        this._id = id;
        this._vin = vin;
        this._regNum = regNum;
        this._connectedTo = connectedTo;
        this._createDateTime = createDateTime;
        this._updateDateTime = updateDateTime;
        this._customerName = customerName;
        this._customerId = customerId
    }


    get customerId(): any {
        return this._customerId;
    }

    set customerId(value: any) {
        this._customerId = value;
    }

    get status(): any {
        return this._status;
    }

    set status(value: any) {
        this._status = value;
    }

    get customerName(): any {
        return this._customerName;
    }

    set customerName(value: any) {
        this._customerName = value;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get vin(): string {
        return this._vin;
    }

    set vin(value: string) {
        this._vin = value;
    }

    get regNum(): string {
        return this._regNum;
    }

    set regNum(value: string) {
        this._regNum = value;
    }

    get connectedTo(): number {
        return this._connectedTo;
    }

    set connectedTo(value: number) {
        this._connectedTo = value;
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