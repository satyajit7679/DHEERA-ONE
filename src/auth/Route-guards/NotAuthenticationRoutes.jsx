// import React from 'react'
import { Outlet, useNavigate,Navigate } from 'react-router-dom'

function NotAuthenticationRoutes() {
    // const navigate = useNavigate()
    const status=localStorage.getItem("status")
    console.log("status",status)
    if(status!=null && status == "authenticated"){
        return <Navigate to="/" replace = {true} />
    }else{
        
        return <Outlet/>
    }
    
  
}

export default NotAuthenticationRoutes
