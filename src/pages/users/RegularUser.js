import React from 'react'
import { getToken } from '../../utils/auth'


function RegularUser() {
    return (
        <div>
            <h1>RegularUser</h1>
            {getToken()}
        </div>
    )
}

export default RegularUser
