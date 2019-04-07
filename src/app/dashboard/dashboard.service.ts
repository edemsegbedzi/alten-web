import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './Customer';


@Injectable()
export class DashboardService {

    baseUrl = 'http://localhost:8080/customers' //'http://www.mocky.io/v2/5ca640a0340000640076affa';
    constructor(private http: HttpClient) { }

    getCustomers (): Observable<any> {
        return this.http.get(this.baseUrl)
    }

}
