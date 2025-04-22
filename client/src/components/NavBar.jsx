import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/mood-tracker">Mood Tracker</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/resources">Resources</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;