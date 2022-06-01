import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-onbording-points',
  templateUrl: './onbording-points.component.html',
  styleUrls: ['./onbording-points.component.scss']
})
export class OnbordingPointsComponent implements OnInit {

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
