import { INPUT_TYPE } from './../helper/constants/contants';
import { AbstractControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
    selector: 'app-form-container',
    templateUrl: './form-container.component.html',
    styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
    form!: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.form = this.fb.group(this.fromGroup);
    }

    fromGroup = {
        emailFormControl: ['Hello'],
        passFormControl: ["sadasd"],
        phoneFormControl: ["123456"],
    };

    getFormControl(ctrlName: string): AbstractControl | null{
        return this.form.get(ctrlName);
    }

    get inputType(){
        return INPUT_TYPE;
    }

    onSubmit() {
        console.log(this.form, this.form.value);
    }
}
