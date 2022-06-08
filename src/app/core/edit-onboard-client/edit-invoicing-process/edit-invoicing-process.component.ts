import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-invoicing-process',
  templateUrl: './edit-invoicing-process.component.html',
  styleUrls: ['./edit-invoicing-process.component.scss']
})
export class EditInvoicingProcessComponent implements OnInit {

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
