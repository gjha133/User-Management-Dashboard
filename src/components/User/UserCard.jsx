import React from 'react'
import { MdDeleteForever, MdEditNote, MdPhotoLibrary } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteUser } from '../../features/userDetailSlice'

const UserCard = ({ user }) => {
    const { name, email, role, id } = user
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { toggle } = useSelector(store => store.toggle)
    return (
        <div>
            {
                toggle === 'horizontal' ?
                    (
                        <div className='shadow-md border p-5 m-5 ml-2 h-40 w-52 sm:w-52 sm:ml-16 lg:w-56 lg:ml-5 xl:w-64 xl:ml-8'>
                            <h1>Name: {name}</h1>
                            <div>
                                <p>Email: {email}</p>
                                <p>Role: {role}</p>
                            </div>
                            <div className='flex items-center'>
                                <MdPhotoLibrary
                                    className='m-3 ml-0 hover:cursor-pointer'
                                    size={25}
                                    onClick={() => navigate(`/album/${id}`)}
                                />
                                <MdEditNote
                                    className='m-3 ml-0 hover:cursor-pointer'
                                    size={25}
                                    onClick={() => navigate(`/edit/${id}`)}
                                />
                                <MdDeleteForever
                                    className='m-3 ml-0 hover:cursor-pointer'
                                    size={25}
                                    onClick={() => dispatch(deleteUser(id))}
                                />
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className='shadow-sm border p-1 py-2 w-[80vw]'>
                            <div className='grid grid-cols-4 gap-4'>
                                <div className='flex justify-evenly items-center'>{name}</div>
                                <div className='flex justify-evenly items-center'>{email}</div>
                                <div className='flex justify-evenly items-center'>{role}</div>
                                <div className='flex justify-evenly items-center'>
                                    <div className='flex items-center'>
                                        <MdPhotoLibrary
                                            className='m-3 ml-0 hover:cursor-pointer'
                                            size={20}
                                            onClick={() => navigate(`/album/${id}`)}
                                        />
                                        <MdEditNote
                                            className='m-3 ml-0 hover:cursor-pointer'
                                            size={20}
                                            onClick={() => navigate(`/edit/${id}`)}
                                        />
                                        <MdDeleteForever
                                            className='m-3 ml-0 hover:cursor-pointer'
                                            size={20}
                                            onClick={() => dispatch(deleteUser(id))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default UserCard