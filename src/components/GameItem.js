import {Link} from "react-router-dom";

function GameItem({game}) {
    return (
        <Link to={`/game/${game.id}`}>
            <div className="item">
                {game.cover ? <img src={"https:" + game.cover.url}/> :
                    <img src="https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-580x440.png"/>}
                <div>
                    <h3> {game.name}</h3>
                    <p> {game.summary}</p>
                </div>
            </div>
        </Link>
    );
}

export default GameItem;