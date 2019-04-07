import { Component, OnInit } from '@angular/core';
import {DashboardService} from './dashboard.service';
import {Customer} from './Customer';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  customers: Customer[];
  constructor(private service: DashboardService) { }
  ngOnInit() {
      this.service.getCustomers().subscribe(
          response => {
              this.customers = response;
          },
          error => {
          }
      );
      Observable.interval(10000)
          .subscribe((val) => {
              this.service.getCustomers().subscribe(
                  response => {
                      this.customers = response;
                      console.log(this.customers)
                  },
                  error => {
                  }
              );
          });
  }

}
