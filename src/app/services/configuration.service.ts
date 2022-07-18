import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  host: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  updateAllArticlesByTva(tva: number): Observable<any> {
    return this.httpClient.put<any>(`${this.host}/articles/updateArticleByTva`, tva);
  }
}
