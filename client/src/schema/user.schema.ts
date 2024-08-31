import { object, string } from "yup";

export const loginSchema = object().shape({
    email: string().email("Email format is not valid").trim().min(1, 'Email field is empty. Please complete').required("Email field is required"),
    password: string().trim().min(1, 'Password field is empty. Please complete').required("Password field is required"),
})