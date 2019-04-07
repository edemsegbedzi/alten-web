import { Pipe, PipeTransform } from '@angular/core';
import {Vehicle} from '../dashboard/Vehicle';
@Pipe({
    name: 'vehicleCustomerFilter'
})
export class SearchPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!args) {
            return value;
        }
        console.log(value, args);
        return value.filter((vehicle: any) => {
            const rVal = (vehicle.vin.toLocaleLowerCase().includes(args)) ||
                (vehicle.customerName.toLocaleLowerCase().includes(args)) ||
                (vehicle.status.toLowerCase().includes(args)) ||
                (vehicle.regNum.toLocaleLowerCase().includes(args))
               ;
            return rVal;
        })

    }

}