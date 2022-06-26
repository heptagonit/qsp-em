import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isActiveProject: boolean;
  isActivePassword:boolean;
  isActiveProfile: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  

activeProject() {
    this.isActiveProject = true;
  }
  activePassword() {
    this.isActivePassword = true;
  }
  activeProfile() {
    this.isActiveProfile = true;
  }

}

