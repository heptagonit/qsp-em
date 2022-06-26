import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material-module';
import { HeaderComponent } from './header/header.component';
import { AuthModule } from '../core/auth/auth.module';
@NgModule({
  declarations: [
  
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
