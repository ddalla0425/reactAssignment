import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getGameDetail, getToken} from "../api/GameAPI";

function GameDetail({}) {

    const {gameId} = useParams();

    const [game, setGame] = useState();

    useEffect(() => {
        getToken().then(token =>
            getGameDetail(gameId, token).then(data => setGame(data))
        );
    }, [])

    return (
        <> {
            game && (
                <table border="1">
                    <tbody>
                    <tr>
                        <th>타이틀사진</th>
                        <td>{game.cover ? <img src={"https:" + game.cover.url}/> :
                            <img
                                src="https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1-580x440.png"/>}</td>
                    </tr>
                    <tr>
                        <th>게임 명</th>
                        <td>{game.name}</td>
                    </tr>
                    <tr>
                        <th>게임 명</th>
                        <td>{game.name}</td>
                    </tr>
                    <tr>
                        <th>내용</th>
                        <td>{game.summary}</td>
                    </tr>
                    <tr>
                        <th>스크린샷</th>
                        <td>{game.screenshots.map(screenshot => <img key={screenshot.id} src={screenshot.url}/>)}</td>
                    </tr>
                    </tbody>
                </table>
            )}
        </>
    );
}

export default GameDetail;