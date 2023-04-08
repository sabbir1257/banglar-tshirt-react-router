import React from 'react';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length == 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <dev>
            <h2>Brolosss</h2>
            <p>Please </p>
        </dev>
    }
    return (
        <div>
            <h2>Order summary: {cart.length}</h2>
            {cart.length > 2 ? <span>Aro kino</span> : <span>fokira</span>}
            {message} 
            {
                cart.map(tshirt => <p 
                    key={tshirt._id}
                    >
                        {tshirt.name}
                        <button 
                            onClick={() => handleRemoveFromCart(tshirt._id)}
                        >
                            X
                        </button>    
                    </p>)
            }
            {
                cart.length === 2 && <p>Double</p>
            }
            {
                cart.length === 3 || <h3>tinta</h3>
            }
        </div>
    );
};

export default Cart;

/** 
 * conditional rendering 
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next think will be display )
 * 4. Logical || (if the condition is false then the next think will be display)
 * */  