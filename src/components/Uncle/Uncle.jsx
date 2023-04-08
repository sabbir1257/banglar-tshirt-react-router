import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h1>Uncle</h1> 
            <p><small>grandpa money: {money} </small></p>
            <button onClick={() => setMoney(money + 100)}>send 100 tk</button>
        </div>
    );
};

export default Uncle;