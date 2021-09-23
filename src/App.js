import logo from './logo.svg';
import './App.css';
import PlayerInfo from "./Component/PlayerInfo/PlayerInfo";
import headImage from './images/bd-cricket-logo.png'

function App() {
    return (
        <div>
            <div>
                <img style={{
                    width:"50%",
                    margin: "0 auto",
                    display:"block"
                }} src={headImage} alt=""/>
            </div>
            <PlayerInfo></PlayerInfo>
        </div>
    );
}

export default App;