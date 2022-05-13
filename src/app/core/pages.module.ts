import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { OnboardClientComponent } from './onboard-client/onboard-client.component';
import { ViewClientComponent } from './view-client/view-client.component';
import { ClientHistoryComponent } from './client-history/client-history.component';
import { DueCalendarComponent } from './due-calendar/due-calendar.component';
import { ClientAlertsComponent } from './client-alerts/client-alerts.component';
import { OnboardClientSearchComponent } from './onboard-client-search/onboard-client-search.component';
import { CreateOnboardClientComponent } from './create-onboard-client/create-onboard-client.component';
import { AboutClientComponent } from './about-client/about-client.component';
import { SpocDetailsComponent } from './spoc-details/spoc-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    OnboardClientComponent,
    ViewClientComponent,
    ClientHistoryComponent,
    DueCalendarComponent,
    ClientAlertsComponent,
    OnboardClientSearchComponent,
    CreateOnboardClientComponent,
    AboutClientComponent,
    SpocDetailsComponent,
  ],
  imports: [
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
