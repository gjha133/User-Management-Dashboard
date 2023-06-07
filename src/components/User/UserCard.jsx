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
                        <div className='border-brown-400 border-2 p-5 m-5 h-40 w-64'>
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
                        <div className='border-brown-400 border-2 p-3 w-[80vw]'>
                            <tr className='flex justify-evenly align-middle'>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{role}</td>
                                <td>
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
                                </td>
                            </tr>
                        </div>
                    )
            }
        </div>
    )
}

export default UserCard