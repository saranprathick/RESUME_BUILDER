import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

function NAV() {
    return (
        <>
            <div className="navbar">
                <img id='imgs' src='https://cdn-icons-png.flaticon.com/512/29/29302.png' alt="Logo" />
                <div className="wrapper">
                    <svg>
                        <text x="50%" y="50%" dy=".35em" textAnchor="middle">Resume Future</text>
                    </svg>
                </div>
                <ul className="nav-link">
                    {/* <li>
                        <Link to="/" style={{ color: 'black', fontSize: '21px' }}>SignUp</Link>
                    </li> */}
                    <li>
                        <Link to="/home" style={{ color: 'black', fontSize: '21px' }}>Home</Link>
                    </li>
                    <li>
                        <Link to="/resume" style={{ color: 'black', fontSize: '21px' }}>TemplateSelect</Link>
                    </li>
                    <li>
                        <Link to="/about" style={{ color: 'black', fontSize: '21px' }}>AboutUs</Link>
                    </li>
                    <li>
                        <Link to="/login" style={{ color: 'black', fontSize: '21px' }}>Login</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default NAV;
