import * as yup from 'yup'

const URLRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i

export const schema = yup 
 .object({
    avatar: yup
    .string()
    .matches(URLRegex, "* Must be valid URL")
    .required()
 })
  .required()