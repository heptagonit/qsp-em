import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent
  ],
  imports: [
    SharedModule
  ]
})
export class AuthModule { }
