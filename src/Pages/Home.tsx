import { Link } from "react-router-dom";

export default function Home() { 
    return (
        <>
            <h1>You are on Home</h1>
            <Link to="/settings">Settings</Link> | <Link to="/dashboard">Dashboard</Link>| <Link to="/formulary">Formuláiro</Link>
        </>
        );
}