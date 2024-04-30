import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/game">Game</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;