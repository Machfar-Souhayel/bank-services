import { Component, OnInit } from '@angular/core';
import { CreditTitleService } from './../../services/credit-title.service';

@Component({
  selector: 'app-bank-services-home',
  templateUrl: './bank-services-home.component.html',
  styleUrls: ['./bank-services-home.component.css'],
})
export class BankServicesHomeComponent implements OnInit {
  public data: any;
  headers = [
    { key: 'month', label: 'Période' },
    { key: 'soldeDebut', label: 'Solde début' },
    { key: 'mensualite', label: 'Mensualité' },
    { key: 'interet', label: 'Intérêt' },
    { key: 'capitalRemourse', label: 'Capital remboutsé' },
    { key: 'soldeFin', label: 'Solde fin' },
  ];

  constructor(private creditTitleService: CreditTitleService) {}
  ngOnInit(): void {}

  onCreditTitle(event: any) {
    let dataReceived = {
      montantAchat: event.montantAchat,
      fondsPropres: event.fondsPropres,
      dureeCredit: event.dureeDuCredit,
    };
    this.creditTitleService.search(dataReceived).subscribe((response) => {
      this.data = response;
      console.log('hey', this.data.data.tableauAmortissement);
    });
  }
}
