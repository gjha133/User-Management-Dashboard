import React from 'react'
import { useParams } from 'react-router-dom'

const Album = () => {
    const { id } = useParams()
    return (
        <div>
            Album: {id}
        </div>
    )
}

export default Album