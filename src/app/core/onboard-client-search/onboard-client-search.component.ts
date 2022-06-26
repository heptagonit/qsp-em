import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard-client-search',
  templateUrl: './onboard-client-search.component.html',
  styleUrls: ['./onboard-client-search.component.scss']
})
export class OnboardClientSearchComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit(): void {
  }

  createOnboardingClient(event){
    this.router.navigateByUrl('dashboard/client-module/create/1');
  }

}
