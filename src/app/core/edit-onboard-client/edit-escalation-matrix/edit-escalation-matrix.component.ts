import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-escalation-matrix',
  templateUrl: './edit-escalation-matrix.component.html',
  styleUrls: ['./edit-escalation-matrix.component.scss']
})
export class EditEscalationMatrixComponent implements OnInit {

  panelOpenState = false;
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
