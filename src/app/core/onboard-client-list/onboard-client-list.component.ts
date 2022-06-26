import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard-client-list',
  templateUrl: './onboard-client-list.component.html',
  styleUrls: ['./onboard-client-list.component.scss']
})
export class OnboardClientListComponent implements OnInit {

 
  constructor(public router: Router) { }

  columnsToDisplay: string[] = ["organization", "CoreBusiness", "location", "address", "added", "status", "action"]

  ngOnInit(): void {
  }

  editOnBoardClient(event) {
    if (event.target.value === 'Edit') {
      this.router.navigateByUrl('dashboard/client-module/edit/1');
    }
  }

}
