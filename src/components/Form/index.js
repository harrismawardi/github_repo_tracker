import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import a method from actions

function Form() {

    const [ username, setUsername ] = useState('');

    function updateInput(e) {
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        //  send username to github API
        //   using the 'actions' method and
        //    dispatch the results to the store
        setUsername('');
    }

    return(
        <form>
            <input aria-label="username" type="text" value={username} onChange={updateInput}/>
            <input type="submit" value="Submit" /
        </form>
    )
}

export default Form;
