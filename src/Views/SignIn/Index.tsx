import { useState } from "react";
import {  SaveToLocalStrg } from "../../Services/LocalStorageManagement";
import { redirect } from "react-router-dom";


export default function Signin() {
    const [userData, setUserData] = useState<{ userName: string; password: string }>({
        userName: '',
        password: ''
    });

    function HandleChange(e: React.ChangeEvent<HTMLInputElement>, field: 'userName' | 'password') {
        const value = e.currentTarget.value;
        setUserData((prevData) => ({
            ...prevData,
            [field]: value
        }));
    }
    function CredentialsOk() {
        const user =  localStorage.getItem('current_user_token');
        if (user) {
            return true;
        }
        return false;
    }
    
     function HandleSubmit() {
       
    if(!userData.userName || !userData.password) {
        alert('Preencha todos os campos. Por favor!');
        return null;
    }
        SaveToLocalStrg('current_user_token', userData);
        
         if (CredentialsOk()) {
             console.log("Usuario autenticado!");
             throw redirect('/home');
                   } else {
            console.log("Falha de autenticaçao!");
            return null;
        }
         
        
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={HandleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={userData.userName}
                    onChange={(e) => HandleChange(e, 'userName')}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) => HandleChange(e, 'password')}
                />
                <button type="submit" >Login</button>
            </form>
        </>
    );
}
