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

  getOnlyCommandes(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/commandes/getCommandeByEtape/COMMANDE`);
  }

  getOnlyDevis(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/commandes/getcommandeByEtape/DEVIS`);
  }

  saveCommande(commande: any): Observable<any> {
    return this.httpClient.post<any>(`${this.host}/commandes/saveCommande`, commande);
  }

  updateConactById(id: number, commande: any): Observable<any> {
    return this.httpClient.put<any>(`${this.host}/commandes/updateCommandeById/${id}`, commande);
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
      article: ['', validators?.article],
      qte: ['', validators?.qte],
    })
  }

}
