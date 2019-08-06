import React from 'react';
import "./header.scss";
import {Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/" className="text-middle">
                    Explorer App
            </Link>
            
        </header>
    );
}
 
export default Header;