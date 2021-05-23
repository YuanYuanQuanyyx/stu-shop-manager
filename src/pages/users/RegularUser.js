import React from 'react'
import { getToken } from '../../utils/auth'
import { ifExpire } from '../../services/ifExpire'


function RegularUser() {
    console.log(ifExpire())
    return (
        <div>
            <h1>RegularUser</h1>
            {getToken()}
        </div>
    )
}

export default RegularUser
