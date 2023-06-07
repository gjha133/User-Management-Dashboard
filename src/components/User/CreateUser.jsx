import React from 'react'
import { Formik, Form, Field } from 'formik'
import { formSchema } from './formValidation'
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/userDetailSlice'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        name: '',
        email: '',
        role: '',
    }

    const onSubmit = (values) => {
        dispatch(createUser(values))
        navigate('/')
    }

    return (
        <div>
            <div className='p-3 text-3xl m-3 shadow-md mb-4'>
                    Create User
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={onSubmit}
            >
                {
                    ({ errors, touched }) => (
                        <Form className='flex flex-col p-5'>
                            <label
                                htmlFor="name"
                                className='text-lg p-3'
                            >
                                Name
                            </label>
                            <Field
                                type="text"
                                name="name"
                                className='w-30 outline outline-1 w-96'
                            />
                            <div
                                className='text-red-700 ml-2'
                            >{
                                errors.name &&
                                touched.name &&
                                <p>{errors.name}</p>
                            }
                            </div>

                            <label
                                htmlFor="email"
                                className='text-lg p-3'
                            >
                                Email
                            </label>
                            <Field
                                type="email"
                                name="email"
                                className='w-30 outline outline-1 w-96'
                            />
                            <div
                                className='text-red-700 ml-2'
                            >{
                                errors.email &&
                                touched.email &&
                                <p>{errors.email}</p>
                            }
                            </div>

                            <label
                                htmlFor="role"
                                className='text-lg p-3'
                            >
                                Role
                            </label>
                            <Field
                                type="text"
                                name="role"
                                className='w-30 outline outline-1 w-96'
                            />
                            <div
                                className='text-red-700 ml-2'
                            >{
                                errors.role &&
                                touched.role &&
                                <p>{errors.role}</p>
                            }
                            </div>

                            <div className='p-5'>
                            <button
                                type="submit"
                                className='p-2 outline outline-1 rounded-xl m-2 hover:bg-[#050505] hover:text-white'>
                                Create
                            </button>
                            <button
                                className='p-2 outline outline-1 rounded-xl m-2 hover:bg-[#050505] hover:text-white'>
                                Reset
                            </button>
                        </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default CreateUser