import * as yup from 'yup'

export const schema = yup 
 .object({
    email: yup 
     .string()
     .required("* Please fill in email"),
    password: yup
     .string()
     .required("* Please enter a message"),
 })
 .required()