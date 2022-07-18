import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rv } from '../models/rv.model';

@Injectable({
  providedIn: 'root'
})
export class RvService {
  getAllContacts() {
    throw new Error('Method not implemented.');
  }

  host: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

 /*
  saveRv(rv:Rv): Observable<Rv>{
    return this.httpClient.post<Rv>
    (`${this.host}/rv`, rv);
  }*/
  getAllRv(): Observable<any>{
    return this.httpClient.get<any>(`${this.host}/rvs`);
  }
 saveRv(rv:Rv): Observable<Rv>{
    return this.httpClient.post<Rv>
    (`${this.host}/rv`, rv);
  }

}
