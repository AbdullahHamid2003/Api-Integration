import { Link, NavLink } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navComponent ">
                <div className="container-fluid ms-5 text-center">
                    <Link className="navbar-brand" to="#"><h1>E-Commerce Website</h1></Link>
                </div>
            </nav>
        </div>
    )
}