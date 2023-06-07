import * as Yup from 'yup'

export const editSchema = Yup.object({
    name: Yup.string().min(3).required('Please enter your name.'),
    email: Yup.string().email().required('Please enter valid email.'),
    role: Yup.string().required('Please enter role.')
})