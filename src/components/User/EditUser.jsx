import React from 'react'
import { Formik, Form, Field } from 'formik'
import { formSchema } from './formValidation'
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from '../../features/userDetailSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { id } = useParams()
    const { users } = useSelector(store => store.app)

    const index = users.findIndex(user => user.id === id)
    const initialValues = users[index]

    const onSubmit = (values) => {
        dispatch(editUser({id, values}))
        navigate('/')
    }

    return (
        <div className='flex flex-col justify-center items-center h-[85vh]'>
            <div className='p-3 text-3xl m-3 mb-4'>Edit User</div>
            <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched }) => (
                    <Form className='flex flex-col p-5 justify-center max-w-md mx-auto'>
                        <div className='flex flex-col mb-4'>
                            <label htmlFor='name' className='text-lg p-3'>
                                Name
                            </label>
                            <Field
                                type='text'
                                name='name'
                                className='w-full p-2 outline outline-1 sm:w-72 lg:w-80 xl:w-96'
                            />
                            <div className='text-red-700 ml-2'>
                                {errors.name && touched.name && <p>{errors.name}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label htmlFor='email' className='text-lg p-3'>
                                Email
                            </label>
                            <Field
                                type='email'
                                name='email'
                                className='w-full p-2 outline outline-1 sm:w-72 lg:w-80 xl:w-96'
                            />
                            <div className='text-red-700 ml-2'>
                                {errors.email && touched.email && <p>{errors.email}</p>}
                            </div>
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label htmlFor='role' className='text-lg p-3'>
                                Role
                            </label>
                            <Field
                                type='text'
                                name='role'
                                className='w-full p-2 outline outline-1 sm:w-72 lg:w-80 xl:w-96'
                            />
                            <div className='text-red-700 ml-2'>
                                {errors.role && touched.role && <p>{errors.role}</p>}
                            </div>
                        </div>

                        <div className='flex justify-center'>
                            <div className='p-5'>
                                <button
                                    type='submit'
                                    className='p-2 outline outline-1 rounded-xl m-2 hover:bg-[#050505] hover:text-white'
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EditUser
