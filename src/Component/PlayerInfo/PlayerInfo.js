import React, {useEffect, useState} from 'react';
import playerJsonData from "../../playerFakeData/playeData.json";
import Player from "../Player/Player";
import './PlayerInfo.css'


const PlayerInfo = () => {

    const [player, setPlayer] = useState([]);
    useEffect(()=>{
        setPlayer(playerJsonData);
    },[])

    return (
        <div>
            <div className="playerContainer">
                {
                    player.map(playerInfo => <Player playerData={playerInfo}>
                        </Player>
                    )
                }
            </div>
            <div>

            </div>
        </div>
    );
};

export default PlayerInfo;