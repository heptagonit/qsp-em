import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-client-potential',
  templateUrl: './edit-client-potential.component.html',
  styleUrls: ['./edit-client-potential.component.scss']
})
export class EditClientPotentialComponent implements OnInit {

  panelOpenState = false;
  editClientPotential: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editClientPotential = new FormGroup({
      tempstaffing : new FormControl('')
    })
  }

}
