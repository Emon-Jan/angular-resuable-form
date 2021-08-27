import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
@Component({
    selector: 'app-form-container',
    templateUrl: './form-container.component.html',
    styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
    }

    fromGroup = {
        emailFormControl: ['Hello'],
        passFormControl: ["sadasd"],
        phoneFormControl: ["123456"],
    };

    form = this.fb.group(this.fromGroup);

    onSubmit() {
        console.log(this.form, this.form.value);
    }
}
