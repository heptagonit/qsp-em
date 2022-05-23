import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.scss']
})
export class IdcardComponent implements OnInit {

  editIdCard: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }
  
  createForm(){
    this.editIdCard = new FormGroup({
      specificPoint : new FormControl('')
    })
  }
}
