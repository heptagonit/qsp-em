import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-about-client',
  templateUrl: './about-client.component.html',
  styleUrls: ['./about-client.component.scss']
})
export class AboutClientComponent implements OnInit {

  editOnbordingClient:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editOnbordingClient = new FormGroup({
      organizationName: new FormControl(''),
      organizationCoreBusiness: new FormControl(''),
      businessType:new FormControl(''),
      address:new FormControl(''),
    })
  }

}
