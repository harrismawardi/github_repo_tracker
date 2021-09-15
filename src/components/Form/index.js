import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getResults } from '../../actions';
import './style.css';

function Form() {

    const [ username, setUsername ] = useState('');
    const dispatch = useDispatch();

    function updateInput(e) {
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getResults(dispatch, username);
        setUsername('');
    }

    return(
        <form aria-label="username-form" onSubmit={handleSubmit}>
            <input aria-label="username" type="text" value={username} onChange={updateInput}/>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form;
