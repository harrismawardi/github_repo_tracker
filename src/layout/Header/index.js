import React from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Form } from '../../components'
import './style.css';

function Header() {

    const error = useSelector(state => state.error);

    return(
        <>
            <h2>Enter the GitHub username to get information about your public repos.</h2>
            <Form />
            { error!==false ? <p>{ error }</p> : <Redirect to='/user' /> }
        </>
    )
}

export default Header;
