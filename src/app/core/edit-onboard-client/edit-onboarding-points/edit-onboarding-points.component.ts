import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-onboarding-points',
  templateUrl: './edit-onboarding-points.component.html',
  styleUrls: ['./edit-onboarding-points.component.scss']
})
export class EditOnboardingPointsComponent implements OnInit {

  panelOpenState = false;
  editOnbordingPoints: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editOnbordingPoints = new FormGroup({
      employee : new FormControl('')
    })
  }

}
