import {Link} from "react-router-dom";
import Visual from "../components/Visual";

function Main() {

    return (
        <Link to="/game">
            <div className="content-row">
                <Visual/>
                <h1 style={{color: "black"}}>게임목록 보기</h1>
            </div>
        </Link>
    );
}

export default Main;