import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {/*<NavLink to="/about">About</NavLink>*/}
            <NavLink to="/create">Create</NavLink>
        </nav>
    )
}

export default Navbar;