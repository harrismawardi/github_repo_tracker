import React from 'react';
import Form from '../components'
import './style.css';

function Header() {
    return(
        <>
            <h1>Welcome to the GitHub Repo Tracker</h1>
            <h2>Enter the GitHub username to get information about your public repos.</h2>
            <Form />
        </>
    )
}

export default Header;
