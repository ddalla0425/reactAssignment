import './App.css';
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import GameList from "./pages/GameList";
import GameDetail from "./pages/GameDetail";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="game">
                        <Route index element={<GameList/>}/>
                        <Route path=":gameId" element={<GameDetail/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
