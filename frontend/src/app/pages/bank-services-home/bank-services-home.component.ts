import { Component, OnInit } from '@angular/core';
import { CreditTitleService } from './../../services/credit-title.service';

@Component({
  selector: 'app-bank-services-home',
  templateUrl: './bank-services-home.component.html',
  styleUrls: ['./bank-services-home.component.css'],
})
export class BankServicesHomeComponent implements OnInit {
  public data: any;
  constructor(private creditTitleService: CreditTitleService) {}
  ngOnInit(): void {}

  onCreditTitle(event: any) {
    let dataReceived = {
      montantAchat: event.montantAchat,
      fondsPropres: event.fondsPropres,
      dureeCredit: event.dureeDuCredit,
    };

    console.log('event submitted form child to parent', this.data);
    this.creditTitleService.search(dataReceived).subscribe((response) => {
      this.data = response;
    });
  }
}
