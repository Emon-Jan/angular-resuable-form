import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { isValidEmail, isValidPass, isValidPhone, isValidText } from "./valodators-utils";
import { INPUT_TYPE } from "../constants/contants";

export function inputControlValidator(type: string): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        let val = control.value;
        switch (type) {
            case INPUT_TYPE.EMAIL:
                return isValidEmail(val) ? null: {[INPUT_TYPE.EMAIL]: true};
            case INPUT_TYPE.PASSWORD:
                return isValidPass(val) ? null: {[INPUT_TYPE.PASSWORD]: true};
            case INPUT_TYPE.PHONE:
                return isValidPhone(val) ? null: {[INPUT_TYPE.PHONE]: true};

            case INPUT_TYPE.TEXT:
            default:
                return isValidText(val) ? {[INPUT_TYPE.TEXT]: true}: null;
        }
    };
  }
