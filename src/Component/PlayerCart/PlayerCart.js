import React from 'react';
import './PlayerCart.css';

const PlayerCart = (props) => {
    const cart = props.cart;

    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalSalary = totalSalary + parseInt(element.yearlySalary);
    }
    return (
        <div className="playerCartContainer">
            <h4>Total Selected Player: {cart.length}</h4>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default PlayerCart;