import * as yup from 'yup';

export const BasciFormSchema = yup.object().shape({
    email: yup.string().email("Enter a valid email").required("Required"),
    age: yup.number().positive().integer().required("Required"),
    password: yup.string() 
});