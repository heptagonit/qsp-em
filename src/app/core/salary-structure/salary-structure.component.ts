import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-salary-structure',
  templateUrl: './salary-structure.component.html',
  styleUrls: ['./salary-structure.component.scss']
})
export class SalaryStructureComponent implements OnInit {

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
