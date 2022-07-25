import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fournisseur } from '../models/fournisseur.model';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  private host: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) { }

  getAllFournisseurs(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/fournisseurs/getAllFournisseurs`);
  }

  deleFournisseurById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.host}/fournisseurs/deleteFournisseurById/${id}`);
  }

  saveFournisseur(fournisseur: Fournisseur): Observable<any> {
    return this.httpClient.post<any>(`${this.host}/fournisseurs/saveFournisseur`, fournisseur);
  }

  updateFournisserurById(id: number, fournisseur: Fournisseur): Observable<any> {
    return this.httpClient.put<any>(`${this.host}/fournisseurs/updateFournisseurById/${id}`, fournisseur);
  }

  /**
   * Fonction de creation du formulaire de contact
   */
  createFournisseurForm(validators?: any): FormGroup {
    return this.fb.group({
        id: [''],
        photo: [''],
        reference: [''],
        nom: ['', validators?.nom],
        prenom: ['', validators?.prenom],
        telephone:  ['', validators?.telephone],
        email: ['', validators?.email],
        adresse: ['', validators?.adresse],
        commandes: ['']
    });
  }
}
