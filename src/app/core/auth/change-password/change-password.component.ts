import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  changePassword: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.changePassword = new FormGroup({
      changePassword : new FormControl(''),
      newPassword : new FormControl(''),
      confirmPassword : new FormControl('')
    })
  }

}
