import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-background-verification',
  templateUrl: './background-verification.component.html',
  styleUrls: ['./background-verification.component.scss']
})
export class BackgroundVerificationComponent implements OnInit {

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
