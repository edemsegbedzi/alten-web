import { Component, OnInit } from '@angular/core';
import {TableListService} from './table-list.service';
import {Vehicle} from '../dashboard/Vehicle';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
  providers: [TableListService]
})
export class TableListComponent implements OnInit {
    vehicles: Vehicle[];
    search = '';

    constructor(private service: TableListService, private router: Router) {  }

  ngOnInit() {
      this.service.getVehicles().subscribe(
          response => {
              this.vehicles = response;
          },
          error => {
          }
      );
  }
   linkToCustomer(customerId: number) {
        console.log(customerId);
       this.router.navigate(['/user-profile', customerId]);

  }

}
