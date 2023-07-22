import './Navbar.css'
import { useRef } from "react";

function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
    <div class="Navbar">
        <div class="logo">marlon</div>
        <a href="#" class="toggle" onClick={showNavbar}>
            <span class = "bar"></span>
            <span class = "bar"></span>
            <span class = "bar"></span>
            
        </a>
        <div class="links">
            <ul>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
    </div>
        
    );
}

export default Navbar;