import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { setHorizontal, setVertical } from '../../features/toggleSlice'
import { ColorRing } from 'react-loader-spinner'
import { BsFillGrid3X2GapFill, BsList } from 'react-icons/bs'
import { changeSearch, searchUser, sortUser } from '../../features/userDetailSlice'

const User = () => {

    const { users, loading, searchData } = useSelector(store => store.app)
    const { toggle } = useSelector(store => store.toggle)
    const [select, setSelect] = useState('name')
    const [sorted, setSorted] = useState('')
    const [sortOrder, setSortOrder] = useState('asc')
    const dispatch = useDispatch()

    useEffect(() => {
        if(sorted) dispatch(sortUser({ sortBy: sorted, order: sortOrder }))
    }, [sortOrder])


    let custom = ''
    if (toggle === 'vertical') {
        custom = 'flex flex-col '
    } else {
        custom = 'flex flex-row flex-wrap'
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchUser({ searchData, select }))
    }

    if (loading) {
        return <div className='absolute left-[50%] top-[40%]'>
            <ColorRing
                visible={true}
                height="150"
                width="150"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }

    return (
        <div>
            <div className='flex justify-between shadow-md mb-4'>
                <div className='px-3 m-3 w-[60vw] flex justify-evenly'>
                    <form onSubmit={handleSubmit} className='w-full flex justify-evenly items-center'>
                        <input
                            type="search"
                            className='outline outline-1 rounded p-2 w-[30%]'
                            placeholder='Search...'
                            value={searchData}
                            onChange={(e) => dispatch(changeSearch(e.target.value))}
                        />
                        <button type='submit' className='px-2 py-1 m-3 outline outline-1 rounded-lg hover:bg-[#050505] hover:text-white'>
                            Search
                        </button>
                        <label htmlFor="search" className='ml-4 mr-2'>Search By: </label>
                        <select name="search" className='outline outline-1 rounded-lg p-1 cursor-pointer'
                            value={select}
                            onChange={(e) => setSelect(e.target.value)}
                        >
                            <option value='name' className='text-sm'>Name</option>
                            <option value='email' className='text-sm'>Email</option>
                            <option value='role' className='text-sm'>Role</option>
                        </select>
                        <label htmlFor="sort" className='ml-4 mr-2'>Sort By: </label>
                        <select name="sort" className='outline outline-1 rounded-lg p-1 cursor-pointer'
                            value={sorted}
                            onChange={(e) => {
                                setSorted(e.target.value);
                                dispatch(sortUser({ sortBy: e.target.value, order: sortOrder }));
                            }}
                        >
                            <option value='' className='text-sm'>Options</option>
                            <option value='name' className='text-sm'>Name</option>
                            <option value='role' className='text-sm'>Role</option>
                        </select>
                        <div className='flex flex-col'>
                            <label htmlFor="asc" className='mx-3'>
                                <input
                                    type="radio"
                                    name="asc"
                                    value="asc"
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    checked={sortOrder === 'asc'}
                                    className='mx-2'
                                />
                                Ascending
                            </label>
                            <label htmlFor="desc" className='mx-3'>
                                <input
                                    type="radio"
                                    name="desc"
                                    value="desc"
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    checked={sortOrder === 'desc'}
                                    className='mx-2'
                                />
                                Descending
                            </label>
                        </div>
                    </form>
                </div>
                <div className='flex justify-center w-[20vw]'>
                    <button
                        className='p-3 rounded-md border-2 m-3 hover:bg-slate-900 hover:text-white'
                        onClick={() => dispatch(setHorizontal())}
                    >
                        <BsFillGrid3X2GapFill />
                    </button>
                    <button
                        className='p-3 rounded-md border-2 m-3 ml-0 hover:bg-slate-900 hover:text-white'
                        onClick={() => dispatch(setVertical())}
                    >
                        <BsList />
                    </button>
                </div>
            </div>
            <div className={`${custom}`}>
                {
                    toggle === 'vertical' ? (
                        <table className='border-brown-400 border-2 p-3 w-[80vw]'>
                            <thead className='flex justify-evenly'>
                                <tr>Name</tr>
                                <tr>Email</tr>
                                <tr>Role</tr>
                                <tr>Actions</tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map(user => <UserCard key={user.id} user={user} />)
                                }
                            </tbody>
                        </table>
                    )
                        : users?.map(user => <UserCard key={user.id} user={user} />)
                }
            </div>
        </div>
    )
}

export default User