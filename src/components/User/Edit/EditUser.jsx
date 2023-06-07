import React from 'react'
import { Formik, Form, Field } from 'formik'
import { editSchema } from '.'
import { useDispatch } from 'react-redux'
import { editUser } from '../../../features/userDetailSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialValues = {
        name: '',
        email: '',
        role: '',
    }

    const onSubmit = (values, actions) => {
        dispatch(editUser({id, values}))
        navigate('/')
    }

    return (
        <div>
            <h1 className='text-3xl m-5'>Edit User</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={editSchema}
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
                                Edit
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

export default EditUser