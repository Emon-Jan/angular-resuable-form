export const INPUT_TYPE = {
    EMAIL: 'email',

    PASSWORD: 'password',

    PHONE: 'tel',

    TEXT: 'text'
}

export const VALIDATOR = {
    NUMBER_REGEX : /[0-9]/,

    LOWSER_CASE_REGEX : /[a-z]/,

    UPPER_CASE_REGEX : /[A-Z]/,

    PASSWORD_MIN_LTNGTH : 8,

    EMAIL_MATCHER_STR : '.com'
}

export const ERROR_MESSAGES = {
    EMAIL_REQUIRED: "Email is required!",

    EMAIL_FORM_ERROR: "Please provide an valid <strong>email!<strong>",

    EMAIL_API_ERROR: "",

    PASSWORD_REQUIRED: "Password is required!",

    PASSWORD_FORM_ERROR: "Incorrect <strong>password!<strong>",

    PASSWORD_API_ERROR: "",

    PHONE_REQUIRED: "Phone number is required",

    PHONE_FORM_ERROR: "Invalid <strong>phone number!<strong>",

    PHONE_API_ERROR: "",
}

