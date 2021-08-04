import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Object>();

  cardForm = new FormGroup({
    montantAchat: new FormControl('120000.00', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^([1-9])[0-9]/),
    ]),
    fondsPropres: new FormControl('20000.00', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^([1-9])[0-9]/),
    ]),
    dureeDuCredit: new FormControl('240', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(3),
      Validators.pattern(/^([1-9])[0-9]/),
    ]),
  });
  constructor() {}

  ngOnInit(): void {}
  onSubmit(values: any) {
    console.log('event submitted from card form component');
    this.submitted.emit(values);
  }
  onResetClick() {
    this.cardForm.reset();
  }
}
