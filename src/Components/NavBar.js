import React from "react";
import logo from '../Assets/logo.jpg';

var NavBar = () => {
    return (
        <div id="nav-bar">
            <div id="logo">
                <h1>APLIHS MD</h1>
            </div>
            <div id="links">
                <Link text="About Us" />
                <Link text="Services" />
                <Link text="Testimonials" />
                <Link text="Contact Us" />
                <Link text="Payment" />
            </div>
        </div>
    )
}

function Link({text}){
    return (
        <div id="link" class="link">
            <div id="line1"></div>
            <h1>{text}</h1>
            <div id="line2"></div>
        </div>
    )
}

export default NavBar;