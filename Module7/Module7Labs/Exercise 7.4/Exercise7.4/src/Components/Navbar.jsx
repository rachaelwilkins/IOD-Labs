import { NavLink } from 'react-router-dom';
import * as React from 'react';
import '../App.css';

export default function NavBar() {
    return(
        <nav className="NavBar">
            <ul className='menu'>
                <NavLink id="link" to="/">Home</NavLink>
                <NavLink id="link" to="/login">Login</NavLink>
                <NavLink id="link" to="/bitcoin">Bitcoin Rates</NavLink>
            </ul>
        </nav>
    )
}