import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreditTitleService {
  constructor(private http: HttpClient) {}
  public search(dataReceived: any) {
    return this.http.post('http://localhost:3000/api/v1/bank', {
      montantAchat: dataReceived.montantAchat,
      fondsPropres: dataReceived.fondsPropres,
      dureeCredit: dataReceived.dureeCredit,
      tauxAnnuel: dataReceived.dureeCredit / 100,
    });
  }
}
