
//this file is used to handle validation for login and registration

import * as Yup from "yup";
import { firstNameValidation, secondNameValidation, emailValidation, passwordValidation } from "../commonValidation";

// --------------------- login section ----------------------
export const loginInitialValues = {
    email: "",
    password: "",
};

export const loginSchema = Yup.object().shape({
    email: emailValidation,
    password: passwordValidation
});
//--------------------- login section end --------------------

//--------------------- register section ----------------------
export const registerInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
};

export const registerSchema = Yup.object().shape({
    firstName: firstNameValidation,
    lastName: secondNameValidation,
    email: emailValidation,
    password: passwordValidation,
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required')
});
//-------------------- register section end ---------------------