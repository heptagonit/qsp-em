import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-contract-letter',
  templateUrl: './edit-contract-letter.component.html',
  styleUrls: ['./edit-contract-letter.component.scss']
})
export class EditContractLetterComponent implements OnInit {

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
