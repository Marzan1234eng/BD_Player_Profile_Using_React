import React, {useEffect, useState} from 'react';
import playerJsonData from "../../playerFakeData/playeData.json";
import Player from "../Player/Player";
import PlayerCart from "../PlayerCart/PlayerCart";
import './PlayerInfo.css'



const PlayerInfo = () => {

    const [player, setPlayer] = useState([]);

    /*json data added using useEffect*/

    useEffect(()=>{
        setPlayer(playerJsonData);
    },[])

    const [cart, setCart] = useState([]);
    const [msg, setMsg] = useState([]);

    const handleAddPlayer = (playerData) => {
        //console.log(playerData);
        if(cart.includes(playerData) == false){
            setMsg("");
            const newCart = [...cart,playerData];
            setCart(newCart);
        }else {
            setMsg("Player Already Added");
        }
        //console.log(cart);
    }

    return (
        <div style={{
            display:"flex"
        }}>
            <div className="playerContainer">
                {
                    player.map(playerInfo => <Player key={playerInfo._id} handleAddPlayer={handleAddPlayer} playerData={playerInfo}>
                        </Player>
                    )
                }
            </div>
            <div>
                <PlayerCart key={cart._id} cart={cart} msg={msg}>

                </PlayerCart>
            </div>
        </div>
    );
};

export default PlayerInfo;