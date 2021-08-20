import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator
} from '@angular/forms';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
  providers:[
      {
          provide: NG_VALUE_ACCESSOR,
          useExisting: InputComponentComponent,
          multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: InputComponentComponent,
        multi: true,
      },
  ]
})
export class InputComponentComponent implements ControlValueAccessor, Validator {

  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern = null;
  @Input() label: string = 'label';
  @Input()
    placeholder!: string;
  @Input() errorMsg: any;
  @Input()
    matcher!: () => void;

   public valueVar!: string;
   public onChange!: (val: any) => void;
   public onTouched!: () => void;

  constructor() {}

    isValid(val: any) {
        const x = 0;
        return false;
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return control.value && this.isValid(control.value) ? null : { val: true };
    }



    writeValue(obj: any): void {
        this.valueVar = obj;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
      this.onTouched = fn
    }

    setDisabledState(isDisable: boolean): void {

    }

    setValue(ev:any){
        this.valueVar = ev.target.value;
        this.onChange(this.valueVar);
    }

    // onChange(event: any){
    //   console.log(event);
    // }
    // onTouched(){
    //     console.log("touched");

    // }

}
