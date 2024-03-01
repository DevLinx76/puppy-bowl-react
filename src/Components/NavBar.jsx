// src/Components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <link to="/">All Players</link> | <link to="/new-player">Add New Player</link>
        </nav>
    );
}

export default NavBar;