import { Navigate, redirect } from 'react-router-dom';

 const handleVerificationProtected = () => {
    const user = localStorage.getItem('current_user')
    if(!user) {
        return <Navigate to="/signin" />;
    }   
    else {
        return null;
    }    
}

const isAuthenticated = () => {
    const user = localStorage.getItem('current_user')
    if(user) {
       throw redirect('/signin');
    }
    else {  
        return null;
    }
    }
export { isAuthenticated, handleVerificationProtected }