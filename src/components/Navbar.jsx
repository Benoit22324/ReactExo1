import { Link } from "react-router-dom";

export const Navbar = () => {
    return <>
        <Link to="/">Acceuil</Link>
        <Link to="/users">Users</Link>
    </>
}