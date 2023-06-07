import React, { useState } from 'react'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { setHorizontal, setVertical } from '../../features/toggleSlice'
import { ColorRing } from 'react-loader-spinner'

const User = () => {

    const { users, loading } = useSelector(store => store.app)
    const { toggle } = useSelector(store => store.toggle)
    const dispatch = useDispatch()

    let custom = ''
    if (toggle === 'vertical') {
        custom = 'flex flex-col '
    } else {
        custom = 'flex flex-row flex-wrap'
    }

    return (
        <div>
            <div className='flex justify-end'>
                <button
                    className='p-3 rounded-md border-2 m-3 hover:bg-slate-900 hover:text-white'
                    onClick={() => dispatch(setHorizontal())}
                >
                    Large
                </button>
                <button
                    className='p-3 rounded-md border-2 m-3 hover:bg-slate-900 hover:text-white'
                    onClick={() => dispatch(setVertical())}
                >
                    Small
                </button>
            </div>
            <div className={`${custom}`}>
                {
                    loading ? <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    /> :
                    users?.map(user => <UserCard key={user.id} user={user} />)
                }
            </div>
        </div>
    )
}

export default User