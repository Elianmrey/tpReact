import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../Pages/Home";
import  Protected  from "./Protected";
import { handleVerificationProtected, isAuthenticated } from "../Services/Authentication.tsx";
import Settings from "../Pages/Settings.tsx";
import SignUp from "../Pages/SignUp.tsx";
import SignIn from "../Pages/SignIn.tsx";
import Dashboard from "../Pages/Dashboard.tsx";
import Notfound from "../Pages/Notfound.tsx";
import Formulary from "../Pages/Formulary.tsx";

const routes = createBrowserRouter(
    createRoutesFromElements(
                                                            //Protected é uma rota protegida
        <Route path="/" element={<Protected />}>
               <Route>
                <Route index element={<Home />} loader={()=> handleVerificationProtected()} />
                <Route path="/settings" element={<Settings />} loader={()=> handleVerificationProtected()} />
                <Route path="/dashboard" element={<Dashboard />} loader={() => handleVerificationProtected()} />
                <Route path="/formulary" element={<Formulary />} loader={() => handleVerificationProtected()} />   
                <Route path="/*" element={<Notfound />} loader={() => handleVerificationProtected()} />    
                        
            </Route>
        
            <Route path="/signin" element={<SignIn  />} loader={() => isAuthenticated()} />
            <Route path="/signup" element={<SignUp />} loader={() => isAuthenticated()} />
            
            
        </Route>
    )
);

export default routes;       
        
