import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData(4)
    return (
        <div>
            <h2>This is Home: {tshirts.length}</h2>
        </div>
    );
};

export default Home;

