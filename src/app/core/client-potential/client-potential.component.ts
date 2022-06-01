import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-potential',
  templateUrl: './client-potential.component.html',
  styleUrls: ['./client-potential.component.scss']
})
export class ClientPotentialComponent implements OnInit {

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
