import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-spoc-details',
  templateUrl: './spoc-details.component.html',
  styleUrls: ['./spoc-details.component.scss']
})
export class SpocDetailsComponent implements OnInit {

  editSpocDetails:FormGroup
  constructor() { }

  ngOnInit(): void {
  }

  createForm(){
    this.editSpocDetails = new FormGroup({
      salespersonname: new FormControl(''),
      contactnumber: new FormControl(''),
      location:new FormControl('')
    })
  }

}
