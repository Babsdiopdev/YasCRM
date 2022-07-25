import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  host: string = environment.baseUrl

  constructor(
    private HttpClient: HttpClient,
    private fb: FormBuilder
  ) { }

  getAllTaches():Observable<any>{
    return this.HttpClient.get<any>(`${this.host}/taches/getAllTaches`)
  }
  
}
