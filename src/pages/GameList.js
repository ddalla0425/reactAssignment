import {useEffect, useState} from "react";
import {getGameList, getToken} from "../api/GameAPI";
import GameItem from "../components/GameItem";

function GameList() {

    const [gameList, setGameList] = useState();

    useEffect(() => {
        // getGameList().then(data => setGameList(data));
        getToken().then(token =>
            getGameList(token).then(data => {
                setGameList(data)
            })
        )
    }, []);

    return (
        <div className="content-row">
            {gameList && gameList.map(game => <GameItem key={game.id} game={game}/>)}
        </div>
    );

    return (
        <></>
    );
}

export default GameList;