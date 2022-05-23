import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-escalation-matrix',
  templateUrl: './escalation-matrix.component.html',
  styleUrls: ['./escalation-matrix.component.scss']
})
export class EscalationMatrixComponent implements OnInit {

  editEscalationMatrix: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editEscalationMatrix = new FormGroup({
      name: new FormControl(''),
      contact : new FormControl(''),
      emailid : new FormControl('')
    })
  }

}
