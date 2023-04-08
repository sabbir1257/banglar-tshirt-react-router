import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const MySelf = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h1>MySelf</h1>
            <p><small>Ring: {ring}</small></p>
        </div>
    );
};

export default MySelf;