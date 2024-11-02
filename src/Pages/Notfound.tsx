import { Link } from "react-router-dom";
import img404 from "../assets/img/404.png";

export default function Notfound() {
    return (<>
        <h1>Not Found</h1>
        <img src={img404} alt="404" style={{width:"50%"}}/>
        <Link to="/">Home</Link>
    </>
        
    )
}