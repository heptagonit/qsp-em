import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-commercial',
  templateUrl: './edit-commercial.component.html',
  styleUrls: ['./edit-commercial.component.scss']
})
export class EditCommercialComponent implements OnInit {

  panelOpenState = false;
  editCommercialDetails:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
  this.editCommercialDetails = new FormGroup({
    startDate:new FormControl(''),
    creditDays: new FormControl(''),
    endDate: new FormControl(''),
    serviceFee: new FormControl(''),
    idCardFee:new FormControl(''),
    emailIDFee:new FormControl(''),
    uniformFee:new FormControl(''),
    absorptionFee:new FormControl(''),
    onboardingFee: new FormControl(''),
    sourcingFee:new FormControl(''),
    otherFees:new FormControl(''),
    manpower : new FormControl(''),
    replacementClause : new FormControl('')
  })
  }


}
