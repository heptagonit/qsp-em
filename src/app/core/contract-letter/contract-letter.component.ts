import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contract-letter',
  templateUrl: './contract-letter.component.html',
  styleUrls: ['./contract-letter.component.scss']
})
export class ContractLetterComponent implements OnInit {

  panelOpenState = false;
  editContractLetter: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editContractLetter = new FormGroup({
      clientName: new FormControl(''),
      dateOfJoining: new FormControl(''),
      contractPeriod: new FormControl(''),
      point: new FormControl('')
    })
  }

}
