import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.scss']
})
export class PayrollComponent implements OnInit {

  panelOpenState = false;
  editPayrollDetails: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
   this.editPayrollDetails = new FormGroup({
    payrollProcess : new FormControl(''),
    clientInput: new FormControl(''),
    nameOfPE: new FormControl(''),
    empIDPE: new FormControl(''),
    emailIDPE: new FormControl(''),
    empIDZM: new FormControl(''),
    nameOfZM: new FormControl(''),
    empIDRM: new FormControl(''),
    nameOfRM: new FormControl(''),
    payout: new FormControl('')
   })
  }

}
