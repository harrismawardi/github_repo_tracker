import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getResults } from '../../actions';
import { Redirect } from 'react-router-dom';
import './style.css';

function Form() {

    const [username, setUsername] = useState('');
    const [redirect, setRedirect] = useState()
    const dispatch = useDispatch();

    function updateInput(e) {
        setUsername(e.target.value);
    }

   async function handleSubmit(e) {
        try {
            e.preventDefault();
            await getResults(dispatch, username);
            // setRedirect(<Redirect to='/user' />)
            document.location = '/user'
        }catch(err){
            console.log(err)
        }
        setUsername('');
    }

    return (
        <>
        <form aria-label="username-form" onSubmit={handleSubmit}>
            <input aria-label="username" type="text" placeholder='username' value={username} onChange={updateInput} />
            <input type="submit" value="Submit" />
        </form>
        {redirect}
        </>
    )
}

export default Form;
