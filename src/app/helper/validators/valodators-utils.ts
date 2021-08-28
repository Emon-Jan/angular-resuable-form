import { VALIDATOR } from "../constants/contants";

export const isValidPass = (val: string) => {
    let re = VALIDATOR.NUMBER_REGEX;
    if (!re.test(val)) {
        return false;
    }
    re = VALIDATOR.LOWSER_CASE_REGEX;
    if (!re.test(val)) {
        return false;
    }
    re = VALIDATOR.UPPER_CASE_REGEX;
    if (!re.test(val)) {
        return false;
    }
    if (val.length <= VALIDATOR.PASSWORD_MIN_LTNGTH) {
        return false;
    }
    return true;
};

export const isValidEmail = (val: string) => {
    return val.includes(VALIDATOR.EMAIL_MATCHER_STR);
}

export const isValidPhone = (val: number, matchingVal?: any)=>{
    return val.toString().includes(matchingVal);
}

export const isValidText = (val: string, matchingVal?: any)=>{
    return val.toLowerCase().includes(matchingVal);
}
