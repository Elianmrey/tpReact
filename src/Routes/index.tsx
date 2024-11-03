import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../Views/Home/Index.tsx";
import Protected from "./Protected";
import { HandleVerificationProtected, IsAuthenticated } from "../Services/Authentication.tsx";
import Settings from "../Views/Settings/Index.tsx";
import SignUp from "../Views/SignUp/Index.tsx";
import SignIn from "../Views/SignIn/Index.tsx";
import Dashboard from "../Views/Dashboard/Index.tsx";
import Notfound from "../Views/NotFound/Index.tsx";
import Formulary from "../Views/Formulary/Index.tsx";






const routes = createBrowserRouter(
    createRoutesFromElements(
        //Protected é uma rota protegida
        <Route path="/" element={<Protected />} >
            <Route>
                <Route path="/" index element={<Home />} loader={() => HandleVerificationProtected()} />
                <Route path="/settings" element={<Settings />} loader={() => HandleVerificationProtected()} />
                <Route path="/dashboard" element={<Dashboard />} loader={() => HandleVerificationProtected()} />
                <Route path="/formulary" element={<Formulary />} loader={() => HandleVerificationProtected()} />
                <Route path="/*" element={<Notfound />} loader={() => HandleVerificationProtected()} />

            </Route>

            <Route path="/signin" element={<SignIn />} loader={() => IsAuthenticated()}  />
            <Route path="/signup" element={<SignUp />} loader={() => IsAuthenticated()} />


        </Route>
    )
);

export default routes;

