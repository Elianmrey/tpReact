import { Link } from "react-router-dom";

export default function Dashboard() { 
    return (
        <>
            <h1>You are on Dashboard</h1>
            <Link to="/">Home</Link> 
        </>
    )
}