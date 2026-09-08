import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <h1 className="logo">Logo</h1>
            <ul className="nav-links">
                <li>
                    <Link to="/Login">Login</Link>
                </li>
                <li>
                    <Link to="/Signup">Signup</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;