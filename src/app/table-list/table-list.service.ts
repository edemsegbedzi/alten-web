import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableListService {

  baseUrl = 'http://localhost:8080/vehicles';

  constructor(private http: HttpClient) { }

   getVehicles (): Observable<any> {
        return this.http.get(this.baseUrl)
   }

}
