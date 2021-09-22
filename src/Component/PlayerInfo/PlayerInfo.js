import React, {useEffect, useState} from 'react';
import playerJsonData from "../../playerFakeData/playeData.json";
import Player from "../Player/Player";
import PlayerCart from "../PlayerCart/PlayerCart";
import './PlayerInfo.css'



const PlayerInfo = () => {

    const [player, setPlayer] = useState([]);
    useEffect(()=>{
        setPlayer(playerJsonData);
    },[])

    const [cart, setCart] = useState([]);

    const handleAddPlayer = (playerData) => {
        const newCart = [...cart,playerData];
        setCart(newCart);
    }

    return (
        <div style={{
            display:"flex"
        }}>
            <div className="playerContainer">
                {
                    player.map(playerInfo => <Player handleAddPlayer={handleAddPlayer} playerData={playerInfo}>
                        </Player>
                    )
                }
            </div>
            <div>
                <PlayerCart cart={cart}>

                </PlayerCart>
            </div>
        </div>
    );
};

export default PlayerInfo;