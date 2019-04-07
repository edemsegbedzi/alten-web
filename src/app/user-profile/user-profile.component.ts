import { Component, OnInit } from '@angular/core';
import {Customer} from '../dashboard/Customer';
import {UserProfileService} from './user-profile.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UserProfileService]
})
export class UserProfileComponent implements OnInit {

  customer: Customer;
  constructor(private service: UserProfileService, private  route: ActivatedRoute) { }

  ngOnInit() {
       this.route.params.subscribe(params => {
          const customerId = params['id'];
           this.getCustomerDetails(customerId)
       });
  }
    getCustomerDetails(customerId: string) {
        this.service.getCustomerDetails(customerId).subscribe(response => {
            this.customer = response[0];
            console.log(response[0])
        });
    }
}
