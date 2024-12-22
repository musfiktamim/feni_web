import React from 'react'
import { useParams } from 'react-router-dom'

function ServicesCompo() {
    const { servicesName } = useParams()
    return (
        <div>
            hello
        </div>
    )
}

export default ServicesCompo