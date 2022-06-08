import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-important-notes',
  templateUrl: './edit-important-notes.component.html',
  styleUrls: ['./edit-important-notes.component.scss']
})
export class EditImportantNotesComponent implements OnInit {

  panelOpenState = false;
  editNotes : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editNotes = new FormGroup({
      notes : new FormControl('')
    })
  }

}
