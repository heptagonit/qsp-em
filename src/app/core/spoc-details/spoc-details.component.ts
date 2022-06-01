import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-spoc-details',
  templateUrl: './spoc-details.component.html',
  styleUrls: ['./spoc-details.component.scss']
})
export class SpocDetailsComponent implements OnInit {

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
