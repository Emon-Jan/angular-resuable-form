import { Component, Input, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormControl,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';

const isValidPass = (val: string) => {
    let re = /[0-9]/;
    if (!re.test(val)) {
        return false;
    }
    re = /[a-z]/;
    if (!re.test(val)) {
        return false;
    }
    re = /[A-Z]/;
    if (!re.test(val)) {
        return false;
    }
    if (val.length <= 8) {
        return false;
    }
    return true;
};

function forbiddenNameValidator(type: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        const val = control.value;
        let forbidden = false;
        switch (type) {
            case 'email':
                forbidden = val.includes('.com');
                return forbidden ? null:{email: true};
            case 'password':
                forbidden = isValidPass(val);
                return forbidden ? null:{pass: true};
            case 'tel':
                forbidden = true;
                return forbidden ? null:{phone: true};

            case 'text':
            default:
                return forbidden ? {value: true}: null;
        }
    };
  }

@Component({
    selector: 'app-input-component',
    templateUrl: './input-component.component.html',
    styleUrls: ['./input-component.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: InputComponentComponent,
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: InputComponentComponent,
            multi: true,
        },
    ],
})

export class InputComponentComponent
    implements ControlValueAccessor, OnInit
{
    @Input() type = 'text';
    @Input() label: string = 'label';
    @Input() placeholder!: string;
    @Input() errorMsg: any;

    public valueVar!: string;
    public onChange!: (val: any) => void;
    public onTouched!: () => void;
    myGroup!: FormGroup;

    constructor() {}

    ngOnInit(){
        this.myGroup = new FormGroup({
            inputVal: new FormControl('', [Validators.required, forbiddenNameValidator(this.type)])
         });
    }

    get formControlVal() {
        return this.myGroup.controls.inputVal;
      }

    validate(_: FormControl) {
        return this.myGroup.valid ? null : { [this.type]: { valid: false } };
      }

    writeValue(obj: any): void {
        this.valueVar = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisable: boolean): void {}

    setValue(ev: any) {
        this.valueVar = ev.target.value;
        this.onChange(this.valueVar);
    }

}
