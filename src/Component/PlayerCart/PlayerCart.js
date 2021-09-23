import React from 'react';
import './PlayerCart.css';

const PlayerCart = (props) => {
    const cart = props.cart;
    const msg = props.msg;



    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        //console.log(element.name);
        totalSalary = totalSalary + parseInt(element.yearlySalary);
    }

    return (
        <div className="playerCartContainer">
            <h4>Total Selected Player: {cart.length}</h4>
            <h4 className="msg">{msg}</h4>
            <p>Selected Player Name:
                <ol>
                    {
                        cart.map(cart =>
                            <li key={cart._id}>{cart.name} <b>Salary:</b> {cart.yearlySalary}</li>
                        )
                    }
                </ol>
            </p>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default PlayerCart;