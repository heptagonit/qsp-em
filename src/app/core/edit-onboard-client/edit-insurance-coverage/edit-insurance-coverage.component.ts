import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-insurance-coverage',
  templateUrl: './edit-insurance-coverage.component.html',
  styleUrls: ['./edit-insurance-coverage.component.scss']
})
export class EditInsuranceCoverageComponent implements OnInit {

  panelOpenState = false;
  editInsuranceCoverage : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editInsuranceCoverage = new FormGroup({
      amount : new FormControl(''),
      gmcGiven: new FormControl(''),
      accidentCoverage: new FormControl(''),
      Premium: new FormControl(''),
      lifeInsurance: new FormControl(''),
      agreedRate: new FormControl(''),
      insutruction: new FormControl('')
    })
  }

}
