import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-background-verification',
  templateUrl: './edit-background-verification.component.html',
  styleUrls: ['./edit-background-verification.component.scss']
})
export class EditBackgroundVerificationComponent implements OnInit {

  panelOpenState = false;
  editBacgorundverification: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editBacgorundverification = new FormGroup({
      performBGV : new FormControl(''),
      billingPlace : new FormControl('')
    })
  }

}
