import React from 'react';
import './Player.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";

const Player = (props) => {
    const {name, email, phone, image, yearlySalary} = props.playerData;
    const handlePlayer = props.handleAddPlayer;
    return (
        <div className="profileContainer">
            <div className="imageContainer">
                <h4>Player Name: {name}</h4>
                <img className="profilePic" src={image} alt=""/>
            </div>
            <div className="playerDetail">
                <div>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Yearly Salary: {yearlySalary}</p>
                    <button className="addBtn"
                            onClick={() => handlePlayer(props.playerData)}
                    >
                        <FontAwesomeIcon className="addIcon" icon={faPlusCircle}/>
                        Add Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;