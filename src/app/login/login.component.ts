import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray  } from '@angular/forms';

export interface Subject {
  id: number;
  name: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmValue:FormGroup;
  record:any;
  constructor(private formBuilder:FormBuilder) { }

  Discipline: any = ['MCS', 'WMC', 'DIF'];
  subjectData: Subject[] = [
    { id: 0, name: 'MPL' },
    { id: 1, name: 'OOP' },
    { id: 2, name: 'OS' },
    { id: 3, name: 'PF' },
    { id: 2, name: 'VP' }
  ];
  ngOnInit(): void {
    this.frmValue=this.formBuilder.group({
        regNo:[''],
        fristName:[''],
        gender: [''],
        descipline:[''],
        name: this.formBuilder.array([])
    })
  }
  onChange(name: string, isChecked: boolean) {
    const sub = (this.frmValue.controls.name as FormArray);
    if (isChecked) {
      sub.push(new FormControl(name));
    } else {
      const index = sub.controls.findIndex(x => x.value === name);
      sub.removeAt(index);

    }
  }
  login(){
    this.record=this.frmValue;
    console.log("Registration No. ....."+this.frmValue.value.regNo);
    console.log("Name .............."+this.frmValue.value.fristName);
    console.log("Gender ....... ...."+this.frmValue.value.gender);
    console.log("descipline ........"+this.frmValue.value.descipline);
    console.log("Subject Name ........"+this.frmValue.value.name);
  }

  // ngOnInit(){

  // }

}
