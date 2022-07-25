import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VenteService {

  host: string = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  deleteArticleFromCommande(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.host}/ventes/deleteVenteById/${id}`);
  }
}
