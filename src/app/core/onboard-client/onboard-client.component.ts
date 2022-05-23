import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboard-client',
  templateUrl: './onboard-client.component.html',
  styleUrls: ['./onboard-client.component.scss']
})
export class OnboardClientComponent implements OnInit {

  constructor(public router:Router) { }

  columnsToDisplay: string[] = ["organization","CoreBusiness","location","address","added","status","action"]

  ngOnInit(): void {
  }

  editOnBoardClient(){
   this.router.navigateByUrl('/edit/:id')
  }

}
