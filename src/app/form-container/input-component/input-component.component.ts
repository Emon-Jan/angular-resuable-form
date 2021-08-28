import { Component, Input, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormControl,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    Validators,
} from '@angular/forms';
import { inputControlValidator } from 'src/app/helper/validators/custom-validators';
import { ERROR_MESSAGES, INPUT_TYPE } from "../../helper/constants/contants";

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
    myGroup!: FormGroup;
    @Input() type = 'text';
    @Input() label: string = 'label';
    @Input() placeholder!: string;
    @Input() isRequired!: boolean;
    @Input() parentFormCtrl!: AbstractControl | null;

    public errorMsg: any;
    public valueVar!: string;
    public onChange!: (val: any) => void;
    public onTouched!: () => void;

    constructor() {}

    ngOnInit(){
        this.myGroup = new FormGroup({
            inputVal: new FormControl('', [Validators.required, inputControlValidator(this.type)])
         });

        if (this.parentFormCtrl) {
            this.formControlVal.setValue(this.parentFormCtrl.value);
         }
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

    get getErrorMsg(){
        const isRequired = !this.formControlVal.errors?.required;
        if(this.formControlVal.errors?.[INPUT_TYPE.EMAIL] && isRequired){
            return ERROR_MESSAGES.EMAIL_FORM_ERROR;
        }
        else if(this.formControlVal.errors?.[INPUT_TYPE.PASSWORD] && isRequired){
            return ERROR_MESSAGES.PASSWORD_FORM_ERROR;
        }
        else if(this.formControlVal.errors?.[INPUT_TYPE.PHONE] && isRequired){
            return ERROR_MESSAGES.PHONE_FORM_ERROR;
        }
        return;
    }

    get getRequiredErrorMsg(){
        if(this.type==INPUT_TYPE.EMAIL){
            return ERROR_MESSAGES.EMAIL_REQUIRED;
        }
        else if(this.type==INPUT_TYPE.PASSWORD){
            return ERROR_MESSAGES.PASSWORD_REQUIRED;
        }
        else if(this.type==INPUT_TYPE.PHONE){
            return ERROR_MESSAGES.PHONE_REQUIRED;
        }
        return;
    }

}
