import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-onbording-points',
  templateUrl: './onbording-points.component.html',
  styleUrls: ['./onbording-points.component.scss']
})
export class OnbordingPointsComponent implements OnInit {

  editOnbordingPoints: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

}
