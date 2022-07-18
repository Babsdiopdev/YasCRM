import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private host:string =environment.baseUrl

  constructor(private httpClient: HttpClient,
    private fb: FormBuilder) { }

  getAllCommandes(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/getAllCommandes`);
  }
}
