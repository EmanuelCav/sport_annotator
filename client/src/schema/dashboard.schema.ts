import { object, string } from "yup";

export const dashboardSchema = object().shape({
    name: string().trim().min(1, 'Title field is empty. Please complete').matches(/^[^<>^]+$/).required("Title field is required"),
    category: string().trim().required("Select a sport")
})