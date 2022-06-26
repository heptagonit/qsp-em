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
import { OnboardClientListComponent } from './onboard-client-list/onboard-client-list.component';
import { EditClientComponent } from './edit-onboard-client/edit-client/edit-client.component';
import { EditAboutClientComponent } from './edit-onboard-client/edit-about-client/edit-about-client.component';
import { EditSpocDetailComponent } from './edit-onboard-client/edit-spoc-detail/edit-spoc-detail.component';
import { EditCommercialComponent } from './edit-onboard-client/edit-commercial/edit-commercial.component';
import { EditPayrollComponent } from './edit-onboard-client/edit-payroll/edit-payroll.component';
import { EditInvoicingProcessComponent } from './edit-onboard-client/edit-invoicing-process/edit-invoicing-process.component';
import { EditSalaryStructureComponent } from './edit-onboard-client/edit-salary-structure/edit-salary-structure.component';
import { EditInsuranceCoverageComponent } from './edit-onboard-client/edit-insurance-coverage/edit-insurance-coverage.component';
import { EditContractLetterComponent } from './edit-onboard-client/edit-contract-letter/edit-contract-letter.component';
import { EditIdcardComponent } from './edit-onboard-client/edit-idcard/edit-idcard.component';
import { EditOnboardingPointsComponent } from './edit-onboard-client/edit-onboarding-points/edit-onboarding-points.component';
import { EditEscalationMatrixComponent } from './edit-onboard-client/edit-escalation-matrix/edit-escalation-matrix.component';
import { EditClientPotentialComponent } from './edit-onboard-client/edit-client-potential/edit-client-potential.component';
import { EditOperationComponent } from './edit-onboard-client/edit-operation/edit-operation.component';
import { EditBackgroundVerificationComponent } from './edit-onboard-client/edit-background-verification/edit-background-verification.component';
import { EditClientRequirementsComponent } from './edit-onboard-client/edit-client-requirements/edit-client-requirements.component';
import { EditImportantNotesComponent } from './edit-onboard-client/edit-important-notes/edit-important-notes.component';
import { AuthModule } from './auth/auth.module';
import { ClientModuleComponent } from './client-module/client-module.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

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
    OnboardClientListComponent,
    EditClientComponent,
    EditAboutClientComponent,
    EditSpocDetailComponent,
    EditCommercialComponent,
    EditPayrollComponent,
    EditInvoicingProcessComponent,
    EditSalaryStructureComponent,
    EditInsuranceCoverageComponent,
    EditContractLetterComponent,
    EditIdcardComponent,
    EditOnboardingPointsComponent,
    EditEscalationMatrixComponent,
    EditClientPotentialComponent,
    EditOperationComponent,
    EditBackgroundVerificationComponent,
    EditClientRequirementsComponent,
    EditImportantNotesComponent,
    ClientModuleComponent,
    ProfilePageComponent,
  ],
  imports: [
    PagesRoutingModule,
    SharedModule,
    AuthModule
  ]
})
export class PagesModule { }
