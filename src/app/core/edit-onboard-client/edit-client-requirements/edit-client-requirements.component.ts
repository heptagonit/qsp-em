import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-client-requirements',
  templateUrl: './edit-client-requirements.component.html',
  styleUrls: ['./edit-client-requirements.component.scss']
})
export class EditClientRequirementsComponent implements OnInit {

  panelOpenState = false;
  editClientRequirements : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editClientRequirements = new FormGroup({
      requirements: new FormControl('')
    })
  }

}
