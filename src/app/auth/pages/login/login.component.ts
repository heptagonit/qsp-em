import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  login() {
    this.router.navigate(['/home']);
  }
  hide: boolean = true;
  myFunction() {
    console.log(this.hide)
    this.hide = !this.hide;
  }
}
