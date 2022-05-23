import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOnboardClientComponent } from './create-onboard-client/create-onboard-client.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: CreateOnboardClientComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
