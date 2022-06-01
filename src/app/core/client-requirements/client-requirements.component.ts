import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-requirements',
  templateUrl: './client-requirements.component.html',
  styleUrls: ['./client-requirements.component.scss']
})
export class ClientRequirementsComponent implements OnInit {

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
