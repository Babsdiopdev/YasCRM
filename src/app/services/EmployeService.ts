import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private host: string = environment.baseUrl;


  constructor(private httpClient: HttpClient) { }
  getAllEmploye(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/rvs`);
  }
}
