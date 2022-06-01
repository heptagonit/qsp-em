import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";

const modules = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatTabsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatDividerModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTableModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
]

@NgModule({
  declarations: [
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
   
  ],
})

export class AngularMaterialModule { }
