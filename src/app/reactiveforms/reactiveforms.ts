import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  // encapsulation: // none, shadowDom, native, emulated | default - emulated
  encapsulation: ViewEncapsulation.Emulated, //we can't create shadow dom in angular bc of the dynamic nature of angular when we use emulated | this style will be scoped only to this component
  // encapsulation: ViewEncapsulation.None, //this style will be global to the entire application | No shadow dom
  // encapsulation: ViewEncapsulation.ShadowDom, //creates shadow dom for the component | styles will be scoped to this component only
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './reactiveforms.html',
  styleUrl: './reactiveforms.css',
})
export class Reactiveforms {


  onSubmit(arg0: void) {
    console.log('Reactive Form Submitted');
  }

  title = 'Reactive Forms in Angular';

  private fb: FormBuilder = new FormBuilder();

  loginform: FormGroup = this.fb.group({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    gender: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
  });

  loginUser() {
    console.log(this.loginform.status);
    console.log(this.loginform.value);
    console.log(this.loginform.valid);
  }

  setVal() {
    this.loginform.setValue({
      name: 'Sundari',
      password: 'Sundari@123',
      gender: 'Female',
      email: 'sundari.sridhar01@example.com',
      age: 22,
    });
  }

  patchVal() {
    this.loginform.patchValue({
      name: 'Sundari Sridhar',
      password: 'Sundari@1234',
      age: 18,
      gender: 'Female',
    });
  }
}
