import React, { useState } from 'react';

function Form() {

    const [ username, setUsername ] = useState('');

    function updateInput(e) {
        setUsername(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // send username to github API
        //
        //
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
