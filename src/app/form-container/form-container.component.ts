import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  fromGroup={
    emailFormControl:['', [Validators.required, Validators.email]],
    passFormControl:[null, Validators.required],
    phoneFormControl:[null, Validators.required],
  }

  form = this.fb.group(this.fromGroup)



  matcher = new MyErrorStateMatcher();

  onSubmit(){
      console.log(this.form.value);
  }
}
