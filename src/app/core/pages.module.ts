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
import { CommercialsComponent } from './commercials/commercials.component';
import { PayrollComponent } from './payroll/payroll.component';
import { InvocingProcessComponent } from './invocing-process/invocing-process.component';
import { SalaryStructureComponent } from './salary-structure/salary-structure.component';
import { ContractLetterComponent } from './contract-letter/contract-letter.component';
import { IdcardComponent } from './idcard/idcard.component';
import { OnbordingPointsComponent } from './onbording-points/onbording-points.component';
import { EscalationMatrixComponent } from './escalation-matrix/escalation-matrix.component';
import { ClientPotentialComponent } from './client-potential/client-potential.component';
import { BackgroundVerificationComponent } from './background-verification/background-verification.component';
import { ClientRequirementsComponent } from './client-requirements/client-requirements.component';
import { NotesComponent } from './notes/notes.component';
import { InsuranceCoverageComponent } from './insurance-coverage/insurance-coverage.component';


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
    CommercialsComponent,
    PayrollComponent,
    InvocingProcessComponent,
    SalaryStructureComponent,
    ContractLetterComponent,
    IdcardComponent,
    OnbordingPointsComponent,
    EscalationMatrixComponent,
    ClientPotentialComponent,
    BackgroundVerificationComponent,
    ClientRequirementsComponent,
    NotesComponent,
    InsuranceCoverageComponent,
  ],
  imports: [
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
