import React from 'react'
import { Dashboard, Logo } from './Icons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../features/userDetailSlice'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'

const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <aside className='fixed z-20 bg-[#050505] h-full w-[12.5%] flex flex-col text-white lg:w-36 xl:w-52 items-center'>
            <div 
                className='hidden sm:flex mt-2 lg:mx-12 xl:mx-16'>
                    <Logo />
            </div>
            <div className='my-10 sm:m-0 lg:flex xl:text-xl'>
                <Dashboard />
                <div className='hidden lg:flex lg:mx-2'>
                    Dashboard
                </div>
            </div>
            <Link
                to={'/'}
                onClick={() => dispatch(getAllUsers())}
            >
                <div className='hidden lg:flex lg:p-1 lg:m-4 justify-between pl-5 pr-14 py-3 items-center hover:bg-white hover:text-black hover:rounded-xl xl:text-xl'>All Users</div>
                <div className='m-2 ml-3 sm:m-3 sm:my-5 lg:hidden'><FiUsers size={25} /></div>
            </Link>
            <Link
                to={'/create'}
            >
                <div className='hidden lg:flex lg:p-1 lg:mx-4 justify-between pl-5 pr-14 py-3 items-center hover:bg-white hover:text-black hover:rounded-xl xl:text-xl'>Create User</div>
                <div className='m-2 ml-3 sm:mx-3 lg:hidden'><AiOutlineUserAdd size={25} /></div>
            </Link>
        </aside>
    )
}

export default Sidebar