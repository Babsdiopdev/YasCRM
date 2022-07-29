import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  host: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) { }

  getAllCommandes(name: string): Observable<any> {
    if(name === 'commande') {
      return this.getOnlyCommandes();
    } else {
      return this.getOnlyDevis();
    }
  }

  getOnlyCommandes(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/commandes/getAllCommandeByEtatCommande`);
  }

  getOnlyDevis(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/commandes/getAllDevisByEtatDevis`);
  }

  saveCommande(commande: any): Observable<any> {
    return this.httpClient.post<any>(`${this.host}/commandes/saveCommandeContact`, commande);
  }

  updateCommandeyId(id: number, commande: any): Observable<any> {
    return this.httpClient.put<any>(`${this.host}/commandes/updateCommandeContactById/${id}`, commande);
  }

  deleteCommandeById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.host}/commandes/deleteCommandeById/${id}`);
  }

  /**
   * Fonction de creation du formulaire de commande
   */
   createCommandeForm(validators?: any): FormGroup {
    return this.fb.group({
      etat: ['', validators?.etat],
      contact: ['', validators?.contact],
      articles: this.fb.array([this.createArticleForm(validators?.articles)])
    });
  }

  createArticleForm(validators?: any): FormGroup {
    return this.fb.group({
      id: [''],
      article: ['', validators?.article],
      qte: ['', validators?.qte],
    })
  }

}
