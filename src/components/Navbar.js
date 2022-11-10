import { useRef } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import {NavLink} from "react-router-dom"
function Navbar(){
    const navRef = useRef();
    const showNavbar = ()=> {
        navRef.current.classList.toggle("responsive-nav");
    }
    return(
    <header>
        <h3>Apartments</h3>
       <nav ref={navRef}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contactus">Contact Us</NavLink>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
        </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars/>
            </button>
    </header>
    );
}
export default Navbar;