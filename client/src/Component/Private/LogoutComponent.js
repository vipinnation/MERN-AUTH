import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

const LogoutComponent = () => {

    const history= useHistory();
    useEffect( ()=>{
        localStorage.clear()
        history.push('/login')
    },[])
    return (
        <div>
            
        </div>
    )
}

export default LogoutComponent
