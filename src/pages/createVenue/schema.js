import * as yup from 'yup'

export const schema = yup
    .object({
        name: yup.string().required('Please enter name of venue'),
        description: yup.string().required('Please enter a description'),
        price: yup
            .number()
            .typeError('Please enter a number')
            .required('Please enter price'),
        maxGuests: yup
            .number()
            .typeError('Please enter a number')
            .required('Please enter maximum number of guests'),
        media: yup
            .array()
            .of(yup.string().required('Please add at least one image')),
        meta: yup.object().shape({
            wifi: yup.boolean(),
            parking: yup.boolean(),
            breakfast: yup.boolean(),
            pets: yup.boolean(),
        }),
        location: yup.object().shape({
            address: yup.string(),
            city: yup.string(),
            zip: yup.string(),
            country: yup.string(),
            continent: yup.string(),
        }),
    })
    .required()
