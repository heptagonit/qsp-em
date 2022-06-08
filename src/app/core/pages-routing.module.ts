import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOnboardClientComponent } from './create-onboard-client/create-onboard-client.component';
import { EditClientComponent } from './edit-onboard-client/edit-client/edit-client.component';
import { HomeComponent } from './home/home.component';
import { OnboardClientListComponent } from './onboard-client-list/onboard-client-list.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: OnboardClientListComponent },
      { path: 'edit/:id', component: EditClientComponent },
      { path:'create/:id', component : CreateOnboardClientComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
