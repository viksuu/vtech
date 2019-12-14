import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = "Angular 4";
  f: FormGroup;
  gender = ["male", "female"];
  constructor() {}
  ngOnInit() {
    this.f = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl("male"), // defalut value
      passData: new FormGroup({
        password: new FormControl(null),
        confirm: new FormControl(null)
      }),
      hobbies: new FormArray([]),
      skills: new FormGroup({
        java: new FormControl(false),
        "java-version": new FormControl(false),
        php: new FormControl(false),
        angular: new FormControl(false),
        others: new FormControl(null),
        "other-skill": new FormControl("")
      })
    });
  }
  onSubmit() {
    console.log(this.f);
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.f.get("hobbies")).push(control);
  }

}
