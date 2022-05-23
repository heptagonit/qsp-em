import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-commercials',
  templateUrl: './commercials.component.html',
  styleUrls: ['./commercials.component.scss']
})
export class CommercialsComponent implements OnInit {

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
    otherFees:new FormControl('')
  })
  }

}
