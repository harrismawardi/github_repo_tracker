import React from "react";
import { useSelector } from 'react-redux';

const Welcome = () => {

    const error = useSelector(state => state.error);
    console.log(error);
    const redirect = () => {  window.location = './user' }

    return (<>
        </>);
};

export default Welcome;
