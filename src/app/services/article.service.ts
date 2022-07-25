import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private host: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) { }

  getAllArticles(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/articles/getAllArticles`);
  }

  getAllArticlesByProduit(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/articles/getAllArticlesByType/PRODUIT`);
  }

  saveArticle(article: Article): Observable<any> {
    return this.httpClient.post<any>(`${this.host}/articles/saveArticle`, article);
  }

  updateArticleById(id: number, article: Article): Observable<any> {
    return this.httpClient.put<any>(`${this.host}/articles/updateArticleById/${id}`, article);
  }

  deleteArticleById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.host}/articles/deleteArticleById/${id}`);
  }

  getAllArticlesDisponible(): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/articles/getAllArticlesDisponible`);
  }

  /**
   * Fonction de creation du formulaire de contact
   */
   createArticleForm(validators?: any): FormGroup {
    return this.fb.group({
        id: [''],
        reference: [''],
        libelle: ['', validators?.libelle],
        prixVente: [validators?.prixVente],
        tva:  [validators?.tva],
        etat: ['', validators?.etat],
        type: ['', validators?.type],
        qte: [validators?.qte],
        ventes: [''],
        achats: [''],
    });
  }
}
