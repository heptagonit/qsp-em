import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-idcard',
  templateUrl: './edit-idcard.component.html',
  styleUrls: ['./edit-idcard.component.scss']
})
export class EditIdcardComponent implements OnInit {

  panelOpenState = false;
  editIdCard: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }
  
  createForm(){
    this.editIdCard = new FormGroup({
      specificPoint : new FormControl(''),
      designFormat : new FormControl('')
    })
  }
}
