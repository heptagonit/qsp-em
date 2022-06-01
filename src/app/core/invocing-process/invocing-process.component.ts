import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invocing-process',
  templateUrl: './invocing-process.component.html',
  styleUrls: ['./invocing-process.component.scss']
})
export class InvocingProcessComponent implements OnInit {

  panelOpenState = false;
  editInvoiceProcess: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editInvoiceProcess = new FormGroup({
      pannumber: new FormControl(''),
      posystem: new FormControl(''),
      numberofPO: new FormControl(''),
      tannumber: new FormControl(''),
      gstnumber: new FormControl('')
    })
  }

}
