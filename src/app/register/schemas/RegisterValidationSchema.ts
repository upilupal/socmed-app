import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("email is required").email(),
    password: Yup.string().required("password is required"),

})