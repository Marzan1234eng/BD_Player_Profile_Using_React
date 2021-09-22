import React from 'react';
import './Player.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

const Player = (props) => {
    const {name, email, phone, image, yearlySalary} = props.playerData;
    const handlePlayer = props.handleAddPlayer;
    return (
        <div>
            <h4>Player Name: {name}</h4>
            <img className="profilePic" src={image} alt=""/>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Yearly Salary: {yearlySalary}</p>
            <button
                onClick={() => handlePlayer(props.playerData)}
            >
                <FontAwesomeIcon icon={faPlusCircle}/>
                    Add Player</button>
        </div>
    );
};

export default Player;