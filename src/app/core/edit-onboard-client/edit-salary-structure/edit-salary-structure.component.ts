import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-salary-structure',
  templateUrl: './edit-salary-structure.component.html',
  styleUrls: ['./edit-salary-structure.component.scss']
})
export class EditSalaryStructureComponent implements OnInit {

  panelOpenState = false;
  editSalaryStructure: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.editSalaryStructure = new FormGroup({
      remarks : new FormControl('')
    })
  }

}
