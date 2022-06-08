import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-about-client',
  templateUrl: './edit-about-client.component.html',
  styleUrls: ['./edit-about-client.component.scss']
})
export class EditAboutClientComponent implements OnInit {

  panelOpenState = false;
  editOnbordingClient:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editOnbordingClient = new FormGroup({
      organizationName: new FormControl(''),
      organizationCoreBusiness: new FormControl(''),
      // businessType:new FormControl(''),
      address:new FormControl(''),
    })
  }


}
