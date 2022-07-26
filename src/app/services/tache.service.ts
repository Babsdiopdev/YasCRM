import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tache } from '../models/tache.model';

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
  deleteTacheById(id:number):Observable<any>{
    return this.HttpClient.delete<any>(`${this.host}/taches/deleteTacheById/${id}`)
  }
  saveTache(tache:Tache):Observable<any>{
    return this.HttpClient.post<any>(`${this.host}/taches/saveTache`,tache)
  }
  
  updateTacheById(id: number, tache: Tache):Observable<any>{
    return this.HttpClient.put<any>(`${this.host}/taches/updateTacheById/${id}`, tache)
  }
}
