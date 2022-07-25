import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private host: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) { }

  getAllContacts(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/contacts/getAllContacts`);
  }

  getStatistiquesofContact(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/contacts/statistiques`)
  }

  deleContactById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.host}/contacts/deleteContactById/${id}`);
  }

  saveContact(contact: Contact): Observable<any> {
    return this.httpClient.post<any>(`${this.host}/contacts/saveContact`, contact);
  }

  updateConactById(id: number, contact: Contact): Observable<any> {
    return this.httpClient.put<any>(`${this.host}/contacts/updateContactById/${id}`, contact);
  }

  /**
   * Fonction de creation du formulaire de contact
   */
  createContactForm(validators?: any): FormGroup {
    return this.fb.group({
        id: [''],
        photo: [''],
        reference: [''],
        nom: ['', validators?.nom],
        prenom: ['', validators?.prenom],
        telephone:  ['', validators?.telephone],
        email: ['', validators?.email],
        civilite: ['', validators?.civilite],
        pays: ['', validators?.pays],
        fonction: ['', validators?.fonction],
        typeContact: ['', validators?.typeContact],
        commandes: ['']
    });
  }
}
