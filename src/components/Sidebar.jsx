import React from 'react'
import { Dashboard, Logo } from '../Icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../features/userDetailSlice'

const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <aside 
            className='fixed z-20 bg-[#050505] h-screen w-52 flex flex-col text-white'
        >
            <div className='ml-5 flex items-center'><Logo /></div>
            <div className='flex justify-between pl-5 pr-14 py-3 items-center'>
                <Dashboard />
                <div>Dashboard</div>
            </div>
            <div className='flex justify-between pl-5 pr-14 items-center py-3 hover:bg-white hover:text-black hover:rounded-2xl'>
                <Link to={'/'} onClick={() => dispatch(getAllUsers())}>All Users</Link>
            </div>
            <div className='flex justify-between pl-5 pr-14 items-center py-3 hover:bg-white hover:text-black hover:rounded-2xl'>
                <Link to={'/create'}>Create User</Link>
            </div>
        </aside>
    )
}

export default Sidebar