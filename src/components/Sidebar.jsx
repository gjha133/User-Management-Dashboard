import React from 'react'
import { Dashboard, Logo } from '../Icons'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <aside 
            className='fixed z-20 bg-[#050505] h-screen w-52 flex flex-col text-white'
        >
            <div className='ml-5 flex items-center'><Logo /></div>
            <div className='flex justify-between pl-5 pr-14 py-3 items-center'>
                <Dashboard />
                <Link to={'/'}>Dashboard</Link>
            </div>
            <div className='flex justify-between pl-5 pr-14 items-center py-3'>
                <Link to={'/create'}>Create User</Link>
            </div>
        </aside>
    )
}

export default Sidebar