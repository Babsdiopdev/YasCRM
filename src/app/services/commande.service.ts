import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private host:string =environment.baseUrl

  constructor(private httpClient: HttpClient) { }
}
