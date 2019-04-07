import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

    baseUrl = 'http://localhost:8080/customer';
    constructor(private http: HttpClient) { }

    getCustomerDetails(customerId: string): Observable<any> {
        const params = new HttpParams().set('id', customerId);
        return this.http.get(this.baseUrl, {params: params});
    }
}
