import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { ClientModuleComponent } from './core/client-module/client-module.component';
import { OnboardClientListComponent } from './core/onboard-client-list/onboard-client-list.component';
import { EditClientComponent } from './core/edit-onboard-client/edit-client/edit-client.component';
import { CreateOnboardClientComponent } from './core/create-onboard-client/create-onboard-client.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', loadChildren: () => import('./core/pages.module').then(module => module.PagesModule) },
  // { path: '**', component: LoginComponent },
//   {path : 'client-module', component: ClientModuleComponent,
//      children: [
//       { path: '', component: OnboardClientListComponent },
//       { path: 'edit/:id', component: EditClientComponent },
//       { path:'create/:id', component : CreateOnboardClientComponent},
//     ]
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
