import { Navigate, Outlet } from 'react-router-dom';


 export default function Protected () {
    
     const user = localStorage.getItem('current_user')
    
     if (!user)
        return  <Navigate to="signin"/>;  

    return <Outlet/>
}




