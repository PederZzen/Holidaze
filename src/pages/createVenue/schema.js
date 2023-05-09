import * as yup from 'yup'

export const schema = yup
    .object({
        name: yup.string().required('Please enter name of venue'),
        description: yup.string().required('Please enter a description'),
        price: yup.number().required('Please enter price'),
        maxGuests: yup
            .number()
            .required('Please enter maximun number of guests'),
        media: yup.array().of(yup.string().required()),
        meta: yup
            .object()
            .shape({
                wifi: yup.boolean(),
                parking: yup.boolean(),
                breakfast: yup.boolean(),
                pets: yup.boolean(),
            }),
    })
    .required()
