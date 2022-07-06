import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../modules/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private host: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllContacts(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/contacts`);
  }

  getStatistiquesofContact(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/contacts/statistiques`)
  }

  deleContactById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.host}/contacts/${id}`);
  }
}
