import { object, string } from "yup";

export const loginSchema = object().shape({
    email: string().email("Email format is not valid").trim().min(1, 'Email field is empty. Please complete').required("Email field is required"),
    password: string().trim().min(1, 'Password field is empty. Please complete').required("Password field is required"),
})

export const registerSchema = object().shape({
    username: string().trim().min(1, 'Username field is empty. Please complete').matches(/^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚüÜ._]+$/, {
        message: "Only numbers, letters, _ and . characters are allowed"
    }).required("Username is required"),
    email: string().email("Email format is not valid").trim().min(1, 'Email field is empty. Please complete').required("Email field is required"),
    password: string().trim().min(1, 'Password field is empty. Please complete').required("Password field is required"),
    confirm: string().trim().min(1, 'Confirm password field is empty. Please complete').required("Confirm password field is required")
})