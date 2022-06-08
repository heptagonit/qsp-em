import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-spoc-detail',
  templateUrl: './edit-spoc-detail.component.html',
  styleUrls: ['./edit-spoc-detail.component.scss']
})
export class EditSpocDetailComponent implements OnInit {

  panelOpenState = false;
  editSpocDetails:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editSpocDetails = new FormGroup({
      salespersonname: new FormControl(''),
      contactnumber: new FormControl(''),
      location:new FormControl('')
    })
  }

}
