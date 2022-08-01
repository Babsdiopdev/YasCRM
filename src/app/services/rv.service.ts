import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

 private  host: string = environment.baseUrl;

  constructor(private httpClient: HttpClient,private fb: FormBuilder) { }


  getAllRv(): Observable<any>{
    return this.httpClient.get<any>(`${this.host}/rvs`);
  }
 saveRv(rv:Rv): Observable<Rv>{
    return this.httpClient.post<Rv>
    (`${this.host}/rv`, rv);
  }



  updateRvById(id: number, rv: Rv): Observable<any> {
    return this.httpClient.put<any>(`${this.host}/updateRvById/${id}`, rv);
  }

  deleRvById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.host}/deleteRvById/${id}`);
  }

}
