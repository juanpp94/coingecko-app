import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private readonly URL = environment.api;
  constructor(private httpClient: HttpClient) { 
    
  }


  getAllData$():Observable<any> {
    return this.httpClient.get(`${this.URL}/list`)
  }

  getCryptoData$(id: string):Observable<any> {
    console.log("id en el servicio:",id)
    return this.httpClient.get(`${this.URL}/${id}`)
  }
}
